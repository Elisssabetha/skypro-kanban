import { Container404, Text404, Title404, HomeButton } from "./404.styled";
import { useNavigate } from "react-router-dom";


const NotFound = () => {
  const navigate = useNavigate();
  const handleMainPage = () => {
    navigate("/");
  };
  return (
    <Container404>
      <Title404>404</Title404>
      <Text404>Страница не найдена</Text404>
      <HomeButton onClick={handleMainPage}>
        Вернуться на главную
      </HomeButton>
    </Container404>
  );
};

export default NotFound;