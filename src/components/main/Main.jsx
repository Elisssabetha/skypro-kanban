import Column from "../column/Column";
import { cardList } from "../../../cardList";
import { useState, useEffect } from "react";

const Main = () => {
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
		<main className="main">
			<div className="container">
				<div className="main__block">
					<div className="main__content loading">
						<p>Данные загружаются...</p>
					</div>
				</div>
			</div>
		</main>
	);
}

  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
            {statuses.map((status) => (
              <Column
                key={status}
                title={status}
                cards={cardList.filter((card) => card.status === status)}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
