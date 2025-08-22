import Column from "../column/Column";
import { cardList } from "../../../cardList";
import { useState, useEffect } from "react";
import { Container } from "../Shared.styled";
import { Main, MainBlock, MainContent } from "./Main.styled";

const MainComponent = () => {
  const [loading, setLoading] = useState(true);
  const statuses = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
  ];

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

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
