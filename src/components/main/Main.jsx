import Column from "../column/Column";

const MainContent = () => {
    return (
        <main className="main">
          <div className="container">
            <div className="main__block">
              <div className="main__content">

				<Column
					title="Без статуса"
					cards = {[{
						id: 1,
						theme: "orange",
						title: "Название задачи",
						category: "Web Design",
						date: "30.10.23"},
					{
						id: 2,
						theme: "green",
						title: "Название задачи",
						category: "Research",
						date: "30.10.23"},
					{
						id: 3,
						theme: "orange",
						title: "Название задачи",
						category: "Web Design",
						date: "30.10.23"},
					{	
						id: 4,
						theme: "purple",
						title: "Название задачи",
						category: "Copywriting",
						date: "30.10.23"},
					{	
						id: 5,
						theme: "orange",
						title: "Название задачи",
						category: "Web Design",
						date: "30.10.23"}			
					]}
				/>



                <Column
					title="Нужно сделать"
					cards = {[{
						id: 6,
						theme: "green",
						title: "Название задачи",
						category: "Research",
						date: "30.10.23"},]}
				/>

				<Column
					title="В работе"
					cards = {[{
						id: 7,
						theme: "green",
						title: "Название задачи",
						category: "Research",
						date: "30.10.23"},
					{
						id: 8,
						theme: "purple",
						title: "Название задачи",
						category: "Copywriting",
						date: "30.10.23"},
					{
						id: 9,
						theme: "orange",
						title: "Название задачи",
						category: "Web Design",
						date: "30.10.23"}	
					]}
				/>

                <Column
					title="Тестирование"
					cards = {[{
						id: 10,
						theme: "green",
						title: "Название задачи",
						category: "Research",
						date: "30.10.23"},]}
				/>

				<Column
					title="Готово"
					cards = {[{
						id: 11,
						theme: "green",
						title: "Название задачи",
						category: "Research",
						date: "30.10.23"},]}
				/>
              </div>
            </div>
          </div>
        </main>
    );
};

export default MainContent