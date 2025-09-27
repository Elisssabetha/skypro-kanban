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
  
  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route path="/" element={<MainPage/>}>
          <Route path="card/:id" element={<CardPage />} />
          <Route path="new-card" element={<NewCardPage />} />
          <Route path="exit" element={<ExitPage/>} />
        </Route>
      </Route>

      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;