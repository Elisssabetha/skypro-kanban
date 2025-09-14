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
      // const token = "gbodkas74c4asboc054cod06g5g5k5o5s6g8gbodkas";
      // console.log("Токен из localStorage:", token);
      // console.log("Длина токена:", token?.length);
      //  console.log("Тип токена:", typeof token);

    // const manualToken = "asb4c4boc86gasb4c4boc86g37w3cc3bo3b83k4g37k3bk3cg3c03ck4k";
    // console.log("Токен из Postman:", manualToken);
    // console.log("Длины совпадают:", token?.length === manualToken.length);
    // const tokenToUse = manualToken;


      console.log("Токен из localStorage:", token);
      if (!token) {
        throw new Error("Токен не найден");
      }
      
      const responseData = await fetchTasks({ token });
      console.log("Ответ от сервера:", responseData);
      setTasks(responseData.tasks);
    } catch (err) {
      setError(err.message);
      // console.error("Ошибка загрузки задач:", err);
      console.error("Полная ошибка загрузки задач:", err);
      console.error("Детали ошибки:", err.response?.data); 
    } finally {
      setIsLoading(false);
    }
  };


  // отображение пока загружается
  if (loading || isLoading) {
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
