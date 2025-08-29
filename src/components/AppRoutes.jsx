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

function AppRoutes() {
  const [isAuth, setIsAuth] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <Routes>
      <Route element={<PrivateRoute isAuth={isAuth} />}>
        <Route path="/" element={<MainPage loading={loading} />} />
        <Route path="/exit" element={<ExitPage setIsAuth={setIsAuth} />} />
        <Route path="/new-card" element={<NewCardPage />} />
        <Route path="/card/:id" element={<CardPage />} />
      </Route>

      <Route path="/login" element={<LoginPage setIsAuth={setIsAuth} />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;
