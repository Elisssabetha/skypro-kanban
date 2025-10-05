import axios from "axios";
import { storage } from "./utils/storage";

const AUTH_URL = "https://wedev-api.sky.pro/api/user";

// регистрация
export async function register(userData) {
  try {
    const response = await axios.post(AUTH_URL, userData, {
      headers: {
        "Content-Type": "",
      },
    });
    return response.data;
  } catch (error) {
    if (error.response?.status === 400 || error.response?.status === 409) {
      throw new Error(
        "Введенные вами данные не корректны. Чтобы завершить регистрацию, введите данные корректно и повторите попытку."
      );
    } else if (error.response?.status === 500) {
      throw new Error("Ошибка сервера");
    } else if (error.code === "NETWORK_ERROR") {
      throw new Error("Проблемы с сетью");
    } else {
      throw new Error(error.response?.data?.error || "Ошибка при регистрации");
    }
  }
}

// авторизация
export async function login(userData) {
  try {
    const response = await axios.post(`${AUTH_URL}/login`, userData, {
      headers: {
        "Content-Type": "",
      },
    });
    return response.data;
  } catch (error) {
    if (error.response?.status === 400 || error.response?.status === 401) {
      throw new Error(
        "Введенные вами данные не распознаны. Проверьте свой логин и пароль и повторите попытку входа."
      );
    } else if (error.response?.status === 500) {
      throw new Error("Ошибка сервера");
    } else if (error.code === "NETWORK_ERROR") {
      throw new Error("Проблемы с сетью");
    } else {
      throw new Error(error.response?.data?.error || "Ошибка при авторизации");
    }
  }
}

// выход
// export function logout(setIsAuth) {
//   storage.clearAuthData();
//   localStorage.removeItem("isAuth");
//   localStorage.removeItem("authToken");
//   localStorage.removeItem("user");
//   setIsAuth(false);
// }