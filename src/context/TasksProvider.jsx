import { useState, useCallback, useEffect } from "react";
import { TasksContext } from "./TasksContext";
import { fetchTasks } from "../services/api";

export const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]); //список задач
  const [isLoading, setIsLoading] = useState(false); //загружаются ли
  const [error, setError] = useState(null); // ошибки
  const [tasksLoaded, setTasksLoaded] = useState(false); //первая загрузка


  const loadTasks = useCallback(
    async (forceRefresh = false) => {

      if (tasksLoaded && !forceRefresh) return;

      try {
        setIsLoading(true);
        setError(null);
        const token = localStorage.getItem("authToken");

        if (!token) {
          throw new Error("Токен не найден");
        }

        const responseData = await fetchTasks({ token });
        setTasks(responseData.tasks);
        setTasksLoaded(true);
      } catch (err) {
        setError(err.message);
        setTasksLoaded(false);
      } finally {
        setIsLoading(false);
      }
    },
    [tasksLoaded]
  );

  useEffect(() => {
    loadTasks();
  }, [loadTasks]);

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
    tasksLoaded,
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
