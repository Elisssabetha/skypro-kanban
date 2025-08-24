import { GlobalStyles } from "../../GlobalStyles.styled";
import {
  ContainerSign,
  Modal,
  ModalBlock,
  ModalButton,
  ModalForm,
  ModalFormGroup,
  ModalInput,
  ModalTtl,
  WrapperSign,
} from "../Auth.styled";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <>
    <GlobalStyles/>
      <WrapperSign>
        <ContainerSign>
          <Modal>
            <ModalBlock>
              <ModalTtl>
                <h2>Регистрация</h2>
              </ModalTtl>
              <ModalForm id="formLogUp" action="#">
                <ModalInput
                  className="first-name"
                  type="text"
                  name="first-name"
                  id="first-name"
                  placeholder="Имя"
                />
                <ModalInput
                  className="login"
                  type="text"
                  name="login"
                  id="loginReg"
                  placeholder="Эл. почта"
                />
                <ModalInput
                  className="password-first"
                  type="password"
                  name="password"
                  id="passwordFirst"
                  placeholder="Пароль"
                />
                <ModalButton id="SignUpEnter">
                  <Link to="/login">Зарегистрироваться</Link>
                </ModalButton>
                <ModalFormGroup>
                  <p>
                    Уже есть аккаунт? <Link to="/login">Войдите здесь</Link>
                  </p>
                </ModalFormGroup>
              </ModalForm>
            </ModalBlock>
          </Modal>
        </ContainerSign>
      </WrapperSign>
    </>
  );
};

export default SignUp;
