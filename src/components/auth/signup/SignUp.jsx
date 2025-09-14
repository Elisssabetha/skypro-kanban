import { useState } from "react";
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
  ErrorMessage
} from "../Auth.styled";
import { Link, useNavigate } from "react-router-dom";
import { validateUserData } from "../../../services/utils/authUtils";
import { register } from "../../../services/auth";

const SignUp = () => {

  const navigate = useNavigate();

  // состояние данных формы 
  const [formData, setFormData] = useState({
    name: "",
    login: "",
    password: ""
  });

  // состояние ошибок валидации
  const [errors, setErrors] = useState({});

  // состояние загрузки
  const [loading, setLoading] = useState(false);

  // состояние ошибок с сервера
  const [serverError, setServerError] = useState("");


  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
    if (errors[name]) {
      const newErrors = { ...errors };
      delete newErrors[name]; // УДАЛЯЕМ ошибку для этого поля
      setErrors(newErrors);
    }
    
    // if (errors[name]) {
    //   setErrors({
    //     ...errors,
    //     [name]: ""
    //   });
    // }
    
    setServerError("");
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setServerError("");

    const validationErrors = validateUserData(formData, true);

    //если ошибки валидации, то на сервер данные не отправляем
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setLoading(false);
      return;
    }

    try {
      const authData = await register(formData);
      console.log('Успешная регистрация:', authData);

      // перекидваем на страницу логина
      navigate("/login"); 
      
    } catch (error) {
      setServerError(error.message);
    } finally {
      setLoading(false);
    }

  };
  // текст ошибки из макета
  const errorMessage = "Введенные вами данные не корректны. Чтобы завершить регистрацию, введите данные корректно и повторите попытку.";

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
                  name="name"
                  id="first-name"
                  placeholder="Имя"
                  value={formData.name}
                  onChange={handleChange}
                  error={errors.name}
                />
                <ModalInput
                  className="login"
                  type="text"
                  name="login"
                  id="loginReg"
                  value={formData.login}
                  onChange={handleChange}
                  placeholder="Эл. почта"
                  error={errors.login}
                />
                <ModalInput
                  className="password-first"
                  type="password"
                  name="password"
                  id="passwordFirst"
                  placeholder="Пароль"
                  value={formData.password}
                  onChange={handleChange}
                  error={errors.password}
                />

                {(errors.name || errors.login || errors.password) && (<ErrorMessage>{errorMessage}</ErrorMessage>)}
                {serverError && <ErrorMessage>{serverError}</ErrorMessage>}

                <ModalButton 
                  id="SignUpEnter"
                  onClick={handleRegister} 
                  disabled={loading || Object.keys(errors).length > 0 }
                >
      {loading ? "Загрузка..." : "Зарегистрироваться"}
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
