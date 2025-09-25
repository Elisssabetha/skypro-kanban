import { useState, useEffect } from "react";
import Column from "../column/Column";
// import { cardList } from "../../../cardList";
import { Container } from "../Shared.styled";
import { Main, MainBlock, MainContent } from "./Main.styled";
import { fetchTasks } from "../../services/api";

const MainComponent = ({loading}) => {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const statuses = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
  ];

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    try {
      setIsLoading(true);
      const token = localStorage.getItem("authToken");

      if (!token) {
        throw new Error("Токен не найден");
      }
      
      const responseData = await fetchTasks({ token });
      setTasks(responseData.tasks);
    } catch (err) {
      setError(err.message);
      
    } finally {
      setIsLoading(false);
    }
  };


  // отображение пока загружается
  if (loading) {
    return (
      <Main>
        <Container>
          <MainBlock>
            <MainContent className="loading">
              <p>Данные загружаются...</p>
            </MainContent>
          </MainBlock>
        </Container>
      </Main>
    );
  }

   // Отображение ошибки
   if (error) {
    console.log(error.message)
    return (
      <Main>
        <Container>
          <MainBlock>
            <MainContent className="error">
              <p>Ошибка: {error}</p>
              <button onClick={loadTasks}>Попробовать снова</button>
            </MainContent>
          </MainBlock>
        </Container>
      </Main>
    );
  }

  return (
    <Main>
      <Container>
        <MainBlock>
          <MainContent>
            {statuses.map((status) => (
              <Column
                key={status}
                title={status}
                cards={tasks.filter((tasks) => tasks.status === status)}
              />
            ))}
          </MainContent>
        </MainBlock>
      </Container>
    </Main>
  );
};

export default MainComponent;
