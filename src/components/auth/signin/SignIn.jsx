import { GlobalStyles } from "../../GlobalStyles.styled";
import { ContainerSign, Modal, ModalBlock, ModalInput, ModalForm,ModalFormGroup, ModalTtl, WrapperSign, ModalButton } from "../Auth.styled"
import { Link, useNavigate } from "react-router-dom";

  const SignIn = ({setIsAuth}) => {
    const navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();
        setIsAuth(true);
        navigate("/");
     };
    return (
      <>
      <GlobalStyles/>
      <WrapperSign>
        <ContainerSign>
          <Modal>
            <ModalBlock>
              <ModalTtl>
                <h2>Вход</h2>
              </ModalTtl>
              <ModalForm id="formLogIn" action="#">
                <ModalInput 
                  type="text" 
                  name="login" 
                  id="formlogin" 
                  placeholder="Эл. почта" 
                />
                <ModalInput 
                  type="password" 
                  name="password" 
                  id="formpassword" 
                  placeholder="Пароль" 
                />
                <ModalButton onClick={handleLogin}>
                  Войти
                </ModalButton>
                <ModalFormGroup>
                  <p>Нужно зарегистрироваться?</p>
                  <Link to="/register">Регистрируйтесь здесь</Link>
                </ModalFormGroup>
              </ModalForm>
            </ModalBlock>
          </Modal>
        </ContainerSign>
      </WrapperSign>
      </>
    );
  };
  
    
    export default SignIn