import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import MainPage from "../pages/MainPage";
import NotFoundPage from "../pages/NotFoundPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import PrivateRoute from "./PrivateRoute";
import ExitPage from "../pages/ExitPage";
import CardPage from "../pages/CardPage";
import NewCardPage from "../pages/NewCardPage";
import { MainContent } from "./main/Main.styled";

function AppRoutes() {
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [authChecked, setAuthChecked] = useState(false); //проверка авторизации
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    const savedIsAuth = localStorage.getItem("isAuth");

    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    if (savedIsAuth === "true") {
      setIsAuth(true);
    }
    setAuthChecked(true);

    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <Routes>
      <Route element={<PrivateRoute isAuth={isAuth} loading={!authChecked ||loading}/>}>
        <Route path="/" element={<MainPage loading={loading} user={user} />} />
        <Route
          path="/exit"
          element={<ExitPage setIsAuth={setIsAuth} user={user} />}
        />
        <Route path="/new-card" element={<NewCardPage user={user} />} />
        <Route path="/card/:id" element={<CardPage user={user} />} />
      </Route>

      <Route
        path="/login"
        element={<LoginPage setIsAuth={setIsAuth} setUser={setUser} />}
      />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;
