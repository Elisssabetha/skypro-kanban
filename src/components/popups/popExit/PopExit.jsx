import {
  ExitButton,
  PopExit,
  PopExitBlock,
  PopExitContainer,
  PopExitFormGroup,
  PopExitTtl,
} from "./PopExit.styled";
import { useNavigate } from "react-router-dom";

const PopExitComponent = ({ setIsAuth }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsAuth(false);
    localStorage.removeItem("isAuth");
    navigate("/login");
  };

  const handleStay = () => {
    navigate(-1); // на предыдущую стр
  };

  return (
      <PopExit $isVisible={true}>
        <PopExitContainer>
          <PopExitBlock>
            <PopExitTtl>
              <h2>Выйти из аккаунта?</h2>
            </PopExitTtl>
            <PopExitFormGroup>
              <ExitButton $primary onClick={handleLogout}>
                Да, выйти
              </ExitButton>
              <ExitButton onClick={handleStay}>Нет, остаться</ExitButton>
            </PopExitFormGroup>
          </PopExitBlock>
        </PopExitContainer>
      </PopExit>
  );
};

export default PopExitComponent;
