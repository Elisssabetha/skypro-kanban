import Card from "../card/Card";
import { Cards, ColumnDiv, ColumnTitle } from "./Column.styled";

const Column = ({ title, cards}) => { //cards - список
    return (
        <ColumnDiv>
        <ColumnTitle>
          <p>{ title }</p>
          </ColumnTitle>
        <Cards>
        {cards.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            theme={card.theme}
            title={card.title}
            category={card.category}
            date={card.date}
          />
        ))}
        </Cards>
        </ColumnDiv>
  )};
  
  export default Column;
  