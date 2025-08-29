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

const PopNewCardComponent = () => {
	const navigate = useNavigate();
	
	//сохранение карточки
	const handleSubmit = (e) => {
	  e.preventDefault();
	  console.log("Создание новой карточки");
	  navigate("/"); 
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
					  name="name"
					  id="formTitle"
					  placeholder="Введите название задачи..."
					  autoFocus
					  required
					/>
				  </FormNewBlock>
				  
				  <FormNewBlock>
					<label htmlFor="textArea" className="subttl">
					  Описание задачи
					</label>
					<FormNewArea
					  name="text"
					  id="textArea"
					  placeholder="Введите описание задачи..."
					  required
					/>
				  </FormNewBlock>
				</PopNewCardForm>
				
				<Calendar />
			  </PopNewCardWrap>
			  
			  <Categories>
				<CategoriesP>Категория</CategoriesP>
				<CategoriesThemes>
				  <CategoryTheme $theme="orange" $active={true}>
					<p>Web Design</p>
				  </CategoryTheme>
				  <CategoryTheme $theme="green">
					<p>Research</p>
				  </CategoryTheme>
				  <CategoryTheme $theme="purple">
					<p>Copywriting</p>
				  </CategoryTheme>
				</CategoriesThemes>
			  </Categories>
			  
			  <FormNewCreate type="submit" form="formNewCard">
				Создать задачу
			  </FormNewCreate>
			</PopNewCardContent>
		  </PopNewCardBlock>
		</PopNewCardContainer>
	  </PopNewCard>
	);
  };
  
  export default PopNewCardComponent;