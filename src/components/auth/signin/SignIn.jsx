import { useState, useContext } from "react";
import { GlobalStyles } from "../../GlobalStyles.styled";
import { ContainerSign, Modal, ModalBlock, ModalInput, ModalForm,ModalFormGroup, ModalTtl, WrapperSign, ModalButton, ErrorMessage } from "../Auth.styled"
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../../services/auth";
import { validateUserData } from "../../../services/utils/authUtils";
import { TasksContext } from "../../../context/TasksContext";

  const SignIn = ({setIsAuth, setUser}) => {
    const navigate = useNavigate();
    const { refreshTasks } = useContext(TasksContext);

    // состояние данных формы 
    const [formData, setFormData] = useState({
      login: "",
      password: ""
    });

    //состояние ошибок валидации
    const [errors, setErrors] = useState({});

    //состояние загрузки
    const [loading, setLoading] = useState(false);

    // состояниеошибок с сервера
    const [serverError, setServerError] = useState("");

    // обработка изменений в поле ввода
    const handleChange = (e) => {
      const { name, value } = e.target;
  
      setFormData({
        ...formData,
        [name]: value
      });
      
      // Очищаем ошибку для конкретного поля
      if (errors[name]) {
        setErrors({
          ...errors,
          [name]: ""
        });
      }
      
      setServerError("");
    };


    const handleLogin = async (e) => {
      e.preventDefault();
      setLoading(true);
      setServerError("");

      // валидация перед отправкой
      const validationErrors = validateUserData(formData, false);

      //если есть ошибки
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        setLoading(false);
        return;
      }

      try {
        // вход через апи
        const authData = await login(formData);
        console.log('Успешный вход:', authData);


        localStorage.setItem('authToken', authData.user.token);
        localStorage.setItem('user', JSON.stringify(authData.user));
        localStorage.setItem('isAuth', 'true');

        await new Promise(resolve => setTimeout(resolve, 50));
        if (refreshTasks) {
          await refreshTasks();
        }

        setUser(authData.user);
        setIsAuth(true); 
        navigate("/"); // Переходим на главную страницу
        
      } catch (error) {
        setErrors({
          login: " ",
          password: " "
        });
        setServerError(error.message);
      } finally {
        setLoading(false);
      }
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
                  value={formData.login}
                  onChange={handleChange}
                  error={errors.login || serverError}
                />
                <ModalInput 
                  type="password" 
                  name="password" 
                  id="formpassword" 
                  placeholder="Пароль"
                  value={formData.password}
                  onChange={handleChange}
                  error={errors.password || serverError}
                />

                {errors.login && errors.login.trim() && <ErrorMessage>{errors.login}</ErrorMessage>}
                {errors.password && !formData.password && <ErrorMessage>Заполните пароль</ErrorMessage>}

                {serverError && <ErrorMessage> {serverError}</ErrorMessage>}
                <ModalButton onClick={handleLogin} disabled={loading || serverError }>
                {loading ? "Загрузка..." : "Войти"}
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