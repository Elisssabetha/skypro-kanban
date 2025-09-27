import Card from "../card/Card";
import { Cards, ColumnDiv, ColumnTitle } from "./Column.styled";

const Column = ({ title, cards}) => { //cards - список
  const categoryToTheme = {
    "Web Design": "orange",
    "Research": "green",
    "Copywriting": "purple",
  };
    return (
        <ColumnDiv>
        <ColumnTitle>
          <p>{ title }</p>
          </ColumnTitle>
        <Cards>
        {cards.map((card) => (
          <Card
            key={card._id}
            id={card._id}
            theme={categoryToTheme[card.topic] || "orange"}
            title={card.title}
            topic={card.topic}
            date={card.date}
          />
        ))}
        </Cards>
        </ColumnDiv>
  )};
  
  export default Column;
  