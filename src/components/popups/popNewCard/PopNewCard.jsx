import { useState, useContext } from "react";
import Calendar from "../../calendar/Calendar";
import {
  PopNewCard,
  PopNewCardBlock,
  PopNewCardContainer,
  PopNewCardContent,
  PopNewCardTtl,
  PopNewCardClose,
  PopNewCardWrap,
  PopNewCardForm,
  FormNewBlock,
  FormNewInput,
  FormNewArea,
  Categories,
  CategoriesP,
  CategoriesThemes,
  CategoryTheme,
  FormNewCreate,
} from "./PopNewCard.styled";
import { useNavigate } from "react-router-dom";
import { createTask } from "../../../services/api";
import { TasksContext } from "../../../context/TasksContext";

const PopNewCardComponent = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    topic: "",
    status: "Без статуса",
  });

  const [selectedDate, setSelectedDate] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const categories = [
    { name: "Web Design", theme: "orange" },
    { name: "Research", theme: "green" },
    { name: "Copywriting", theme: "purple" },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCategoryChange = (categoryName) => {
    setFormData((prev) => ({
      ...prev,
      topic: categoryName,
    }));
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const { addTask, refreshTasks } = useContext(TasksContext);

  //сохранение карточки
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Валидация
    if (!formData.title.trim()) {
      setError("Введите название задачи");
      setLoading(false);
      return;
    }

    if (!formData.topic) {
      setError("Выберите категорию");
      setLoading(false);
      return;
    }

    try {
      const token = localStorage.getItem("authToken");

      if (!token) {
        throw new Error("Токен не найден");
      }

      //преобразование даты
      let isoDate = "";
      if (selectedDate) {
        const [day, month, year] = selectedDate.split(".").map(Number);
        const dateObj = new Date(year, month - 1, day);
        if (isNaN(dateObj.getTime())) {
          throw new Error("Некорректная дата");
        }
        isoDate = dateObj.toISOString();
      }

      const taskData = {
        title: formData.title.trim(),
        description: formData.description.trim(),
        topic: formData.topic,
        status: formData.status,
        date: isoDate,
      };

      const response = await createTask({ token, taskData });
      //последняя задача в списке
      const newTask = response.tasks[response.tasks.length - 1];

      if (newTask) {
        addTask(newTask);
      } else {
        refreshTasks();
      }

      navigate("/");
    } catch (err) {
      console.error("Ошибка создания задачи:", err);
      setError(err.message || "Не удалось создать задачу");
    } finally {
      setLoading(false);
    }
  };
  //закрытие попапа
  const handleClose = () => {
    navigate("/");
  };

  return (
    <PopNewCard>
      <PopNewCardContainer>
        <PopNewCardBlock>
          <PopNewCardContent>
            <PopNewCardTtl>Создание задачи</PopNewCardTtl>
            <PopNewCardClose onClick={handleClose}>&#10006;</PopNewCardClose>

            <PopNewCardWrap>
              <PopNewCardForm id="formNewCard" onSubmit={handleSubmit}>
                <FormNewBlock>
                  <label htmlFor="formTitle" className="subttl">
                    Название задачи
                  </label>
                  <FormNewInput
                    type="text"
                    name="title"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    value={formData.title}
                    onChange={handleInputChange}
                    autoFocus
                    required
                  />
                </FormNewBlock>

                <FormNewBlock>
                  <label htmlFor="textArea" className="subttl">
                    Описание задачи
                  </label>
                  <FormNewArea
                    name="description"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                  />
                </FormNewBlock>
              </PopNewCardForm>

              <Calendar
                onDateChange={handleDateChange}
                editable={true}
                selectedDate={selectedDate}
              />
            </PopNewCardWrap>

            {error && (
              <div
                style={{
                  color: "#e74c3c",
                  textAlign: "center",
                  margin: "10px 0",
                  fontSize: "14px",
                }}
              >
                {error}
              </div>
            )}

            <Categories>
              <CategoriesP>Категория</CategoriesP>
              <CategoriesThemes>
                {categories.map((category) => (
                  <CategoryTheme
                    key={category.name}
                    $theme={category.theme}
                    $active={formData.topic === category.name}
                    onClick={() => handleCategoryChange(category.name)}
                  >
                    <p>{category.name}</p>
                  </CategoryTheme>
                ))}
              </CategoriesThemes>
            </Categories>
            <FormNewCreate
              type="submit"
              form="formNewCard"
              disabled={loading || !formData.topic}
            >
              {loading ? "Создание..." : "Создать задачу"}
            </FormNewCreate>
          </PopNewCardContent>
        </PopNewCardBlock>
      </PopNewCardContainer>
    </PopNewCard>
  );
};

export default PopNewCardComponent;
