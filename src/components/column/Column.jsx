import Card from "../card/Card";

const Column = ({ title, cards}) => { //cards - список
    return (
        <div className="main__column">
        <div className="column__title">
          <p>{ title }</p>
        </div>
        <div className="cards">
        {cards.map((card) => (
          <Card
            key={card.id}
            theme={card.theme}
            title={card.title}
            category={card.category}
            date={card.date}
          />
        ))}
        </div>
      </div>
    );
  };
  
  export default Column;
  