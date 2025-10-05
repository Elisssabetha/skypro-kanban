import { useState, useCallback, useEffect, useContext } from "react";
import { TasksContext } from "./TasksContext";
import { fetchTasks } from "../services/api";
import { AuthContext } from "./AuthContext";

export const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]); //список задач
  const [isLoading, setIsLoading] = useState(false); //загружаются ли
  const [error, setError] = useState(null); // ошибки
  const { user } = useContext(AuthContext);

  const loadTasks = useCallback(
    async () => {
      if (!user || !user.token) {
        setTasks([]);
        return;
      }

      try {
        setIsLoading(true);
        setError(null);
        const responseData = await fetchTasks({ token: user.token });
        setTasks(responseData.tasks);
      } catch (err) {
        setError(err.message);
        setTasks([]);
      } finally {
        setIsLoading(false);
      }
    },
    [user]
  );

  useEffect(() => {

    if (user && user.token) {
      loadTasks(true); // принудительно загружаем для нового пользователя
    } else {
      setTasks([]); // очищаем задачи если пользователь вышел
    }
  }, [user?._id, loadTasks, user]);

  const updateTask = useCallback((updatedTask) => {
    setTasks((prev) =>
      prev.map((task) => (task._id === updatedTask._id ? updatedTask : task))
    );
  }, []);

  const addTask = useCallback((newTask) => {
    setTasks((prev) => [...prev, newTask]);
  }, []);

  const removeTask = useCallback((taskId) => {
    setTasks((prev) => prev.filter((task) => task._id !== taskId));
  }, []);

  const value = {
    tasks,
    isLoading,
    error,
    loadTasks,
    updateTask,
    addTask,
    removeTask,
    refreshTasks: () => loadTasks(true),
  };

  return (
    <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
  );
};
