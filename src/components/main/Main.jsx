import { useContext } from "react";
import Column from "../column/Column";
import { Container } from "../Shared.styled";
import { Main, MainBlock, MainContent, Loader, LoadingSpinner, LoadingText } from "./Main.styled";
import { TasksContext } from "../../context/TasksContext";

const MainComponent = () => {
  const { tasks, isLoading, error, loadTasks } = useContext(TasksContext);

  const statuses = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
  ];

  // отображение пока загружается
  if (isLoading) {
    return (
      <Main>
        <Container>
          <MainBlock>
            <MainContent className="loading">
              <Loader>
                <LoadingSpinner />
                <LoadingText>Загрузка задач</LoadingText>
              </Loader>
            </MainContent>
          </MainBlock>
        </Container>
      </Main>
    );
  }

  // Отображение ошибки
  if (error) {
    console.log(error.message);
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
                cards={tasks.filter((task) => task.status === status)}
              />
            ))}
          </MainContent>
        </MainBlock>
      </Container>
    </Main>
  );
};

export default MainComponent;
