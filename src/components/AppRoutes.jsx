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
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    const savedIsAuth = localStorage.getItem("isAuth");

    if (savedUser) setUser(JSON.parse(savedUser));
    if (savedIsAuth === "true") setIsAuth(true);
    
    setLoading(false);
  }, []);


  return (
    <Routes>
      <Route element={<PrivateRoute isAuth={isAuth} loading={loading} />}>
        <Route path="/" element={<MainPage user={user}/>}>
          <Route path="card/:id" element={<CardPage />} />
          <Route path="new-card" element={<NewCardPage />} />
          <Route path="exit" element={<ExitPage setIsAuth={setIsAuth}/>} />
        </Route>
      </Route>

      <Route path="/login" element={<LoginPage setIsAuth={setIsAuth} setUser={setUser} />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;