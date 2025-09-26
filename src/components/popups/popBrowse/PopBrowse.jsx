import { useState, useEffect, useContext } from "react";
import Calendar from "../../calendar/Calendar";
import {
  PopBrowse,
  PopBrowseBlock,
  PopBrowseContainer,
  PopBrowseContent,
  PopBrowseTopBlock,
  PopBrowseTtl,
  PopBrowseStatus,
  PopBrowseWrap,
  StatusThemes,
  PopBrowseForm,
  ThemeTop,
  ThemeDown,
  PopBrowseTheme,
  StatusTheme,
  FormBrowseBlock,
  PopBrowseTextArea,
  PopBrowseButtonGroup,
  ButtonGroup,
  PopBrowseButton,
} from "./popBrowse.styled";
import { useNavigate, useParams } from "react-router-dom";
import { fetchTask, deleteTask, updateTask } from "../../../services/api";
import { TasksContext } from "../../../context/TasksContext";

export const PopBrowseСomponent = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [card, setCard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isEditing, setIsEditing] = useState(false); // режим редактирования
  const [saving, setSaving] = useState(false); //сохранение изменений
  const [selectedDate, setSelectedDate] = useState(""); //выбранная дата

  const { updateTask: updateTaskInContext, removeTask, refreshTasks } =
    useContext(TasksContext);

  const categoryToTheme = {
    "Web Design": "orange",
    Research: "green",
    Copywriting: "purple",
  };

  const statuses = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
  ];

  useEffect(() => {
    const loadCard = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem("authToken");

        if (!token) {
          throw new Error("Токен не найден");
        }

        const cardData = await fetchTask({ token, taskId: id });
        let simpleDate = "";
        if (cardData.task.date) {
          simpleDate = new Date(cardData.task.date).toLocaleDateString("ru-RU");
        }

        setCard({
          ...cardData.task,
          date: simpleDate,
        });
        setSelectedDate(simpleDate);
      } catch (err) {
        setError(err.message);
        console.error("Ошибка загрузки карточки:", err);
      } finally {
        setLoading(false);
      }
    };
    if (id) {
      loadCard();
    }
  }, [id]);

  const handleDateChange = (newDate) => {
    if (isEditing) {
      setSelectedDate(newDate);
    }
  };

  //редактирование
  const handleSave = async () => {
    try {
      setSaving(true); // включаем состояние сохранения
      const token = localStorage.getItem("authToken");

      let isoDate = "";
      if (selectedDate) {
        const [day, month, year] = selectedDate.split(".");
        isoDate = new Date(year, month - 1, day).toISOString();
      }

      const taskData = {
        title: card.title,
        description: card.description,
        status: card.status,
        topic: card.topic,
        date: isoDate,
      };


      const response = await updateTask({ token, taskId: id, taskData });
      const updatedTask = response.tasks.find(task => task._id === id);

      if (updatedTask) {
        updateTaskInContext(updatedTask);
      } else {
        // если не нашли - обновляем весь список
        refreshTasks();
      }

      setIsEditing(false);
      navigate(-1);
    } catch (err) {
      console.error("Ошибка сохранения:", err);
      alert("Не удалось сохранить изменения");
    } finally {
      setSaving(false); // выключпаем состояние сохранения
    }
  };

  //удаление
  const handleDelete = async () => {
    if (window.confirm("Вы уверены, что хотите удалить эту задачу?")) {
      try {
        const token = localStorage.getItem("authToken");
        await deleteTask({ token, taskId: id });
        removeTask(id);
        navigate("/"); //на главную после удаления
      } catch (err) {
        console.error("Ошибка удаления задачи:", err);
        alert("Не удалось удалить задачу");
      }
    }
  };

  //переключение на режим редактирования
  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleClose = () => {
    if (isEditing) {
      setIsEditing(false);
    } else {
      navigate("/");
    }
  };

  const handleCancel = () => {
    if (isEditing) {
      setIsEditing(false);
    } else {
      navigate(-1);
    }
  };

  if (loading) {
    return null;
    // return (
    //   <PopBrowse>
    //     <PopBrowseContainer>
    //       <PopBrowseBlock>
    //         <PopBrowseContent>
    //           <p>Загрузка карточки...</p>
    //         </PopBrowseContent>
    //       </PopBrowseBlock>
    //     </PopBrowseContainer>
    //   </PopBrowse>
    // );
  }

  if (error || !card) {
    return (
      <PopBrowse>
        <PopBrowseContainer>
          <PopBrowseBlock>
            <PopBrowseContent>
              <p>Ошибка: {error || "Карточка не найдена"}</p>
              <PopBrowseButton onClick={handleClose}>Закрыть</PopBrowseButton>
            </PopBrowseContent>
          </PopBrowseBlock>
        </PopBrowseContainer>
      </PopBrowse>
    );
  }

  return (
    <PopBrowse id="popBrowse">
      <PopBrowseContainer>
        <PopBrowseBlock>
          <PopBrowseContent>
            <PopBrowseTopBlock>
              <PopBrowseTtl>{card.title}</PopBrowseTtl>
              <ThemeTop>
                <PopBrowseTheme
                  $theme={categoryToTheme[card.topic]}
                  $active={true}
                >
                  <p>{card.topic}</p>
                </PopBrowseTheme>
              </ThemeTop>
            </PopBrowseTopBlock>

            <PopBrowseStatus>
              <p className="subttl">Статус</p>
              <StatusThemes>
                {isEditing ? (
                  //режим редактирования - все статусы
                  statuses.map((status) => (
                    <StatusTheme
                      key={status}
                      $active={card.status === status}
                      $clickable={true}
                      onClick={() => setCard({ ...card, status })}
                    >
                      <p>{status}</p>
                    </StatusTheme>
                  ))
                ) : (
                  // просмотр - только текущий статус
                  <StatusTheme $active={true} $clickable={false}>
                    <p>{card.status || "Без статуса"}</p>
                  </StatusTheme>
                )}
              </StatusThemes>
            </PopBrowseStatus>

            <PopBrowseWrap>
              <PopBrowseForm id="formBrowseCard">
                <FormBrowseBlock>
                  <label htmlFor="textArea01" className="subttl">
                    Описание задачи
                  </label>
                  <PopBrowseTextArea
                    name="text"
                    id="textArea01"
                    readOnly={!isEditing} // заблокировано в режиме просмотра
                    placeholder="Введите описание задачи..."
                    value={card.description || "Описание отсутствует"}
                    onChange={(e) =>
                      isEditing &&
                      setCard({ ...card, description: e.target.value })
                    }
                    $editable={isEditing}
                  />
                </FormBrowseBlock>
              </PopBrowseForm>
              <Calendar
                onDateChange={handleDateChange}
                editable={isEditing}
                selectedDate={selectedDate}
              />
            </PopBrowseWrap>

            <ThemeDown>
              <p className="subttl">Категория</p>
              <PopBrowseTheme
                $theme={categoryToTheme[card.topic]}
                $active={true}
              >
                <p>{card.topic}</p>
              </PopBrowseTheme>
            </ThemeDown>

            <PopBrowseButtonGroup>
              <ButtonGroup>
                <PopBrowseButton
                  $variant="bor"
                  onClick={isEditing ? handleSave : handleEdit}
                  disabled={saving}
                >
                  {saving
                    ? "Сохранение..."
                    : isEditing
                    ? "Сохранить"
                    : "Редактировать задачу"}
                </PopBrowseButton>

                {isEditing && (
                  <PopBrowseButton
                    $variant="bor"
                    onClick={handleCancel}
                    disabled={saving}
                  >
                    Отменить
                  </PopBrowseButton>
                )}

                <PopBrowseButton $variant="bor" onClick={handleDelete}>
                  Удалить задачу
                </PopBrowseButton>
              </ButtonGroup>

              <PopBrowseButton
                $variant="bg"
                onClick={handleClose}
                disabled={saving}
              >
                Закрыть
              </PopBrowseButton>
            </PopBrowseButtonGroup>
          </PopBrowseContent>
        </PopBrowseBlock>
      </PopBrowseContainer>
    </PopBrowse>
  );
};

export default PopBrowseСomponent;
