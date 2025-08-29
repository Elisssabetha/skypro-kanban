import Calendar from "../../calendar/Calendar";
import { cardList } from "../../../../cardList";
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
import { useNavigate } from "react-router-dom";

export const PopBrowseСomponent = ({ id }) => {
  const navigate = useNavigate();

  const card = cardList.find((item) => item.id === parseInt(id));
  if (!card) {
    return <div>Карточка не найдена</div>;
  }

  const statuses = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
  ];

  const handleClose = () => {
    navigate(-1); // на предыдущую стр
  };

  return (
    <PopBrowse id="popBrowse">
      <PopBrowseContainer>
        <PopBrowseBlock>
          <PopBrowseContent>
            <PopBrowseTopBlock>
              <PopBrowseTtl>{card.title}</PopBrowseTtl>
              <ThemeTop>
                <PopBrowseTheme $theme={card.theme} $active={true}>
                  <p>{card.category}</p>
                </PopBrowseTheme>
              </ThemeTop>
            </PopBrowseTopBlock>

            <PopBrowseStatus>
              <p className="subttl">Статус</p>
              <StatusThemes>
                {statuses.map((status) => (
                  <StatusTheme key={status} $active={card.status === status}>
                    <p>{status}</p>
                  </StatusTheme>
                ))}
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
                    readOnly
                    placeholder="Введите описание задачи..."
                    value={card.description || "Описание отсутствует"}
                  />
                </FormBrowseBlock>
              </PopBrowseForm>
              <Calendar />
            </PopBrowseWrap>

            <ThemeDown>
              <p className="subttl">Категория</p>
              <PopBrowseTheme $theme={card.theme} $active={true}>
                <p>{card.category}</p>
              </PopBrowseTheme>
            </ThemeDown>

            <PopBrowseButtonGroup>
              <ButtonGroup>
                <PopBrowseButton $variant="bor">
                  Редактировать задачу
                </PopBrowseButton>
                <PopBrowseButton $variant="bor">Удалить задачу</PopBrowseButton>
              </ButtonGroup>
              <PopBrowseButton
                $variant="bg"
                onClick={handleClose}
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
