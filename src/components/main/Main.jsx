import Column from "../column/Column";
import { cardList } from "../../../cardList";
import { Container } from "../Shared.styled";
import { Main, MainBlock, MainContent } from "./Main.styled";

const MainComponent = ({loading}) => {

  const statuses = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
  ];


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

  return (
    <Main>
      <Container>
        <MainBlock>
          <MainContent>
            {statuses.map((status) => (
              <Column
                key={status}
                title={status}
                cards={cardList.filter((card) => card.status === status)}
              />
            ))}
          </MainContent>
        </MainBlock>
      </Container>
    </Main>
  );
};

export default MainComponent;
