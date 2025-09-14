import { Navigate, Outlet } from "react-router-dom";
import { MainContent } from "./main/Main.styled";

function PrivateRoute({ isAuth, loading }) {

  if (loading) {
    return (
      <MainContent className="loading">
        <p>Загрузка...</p>
      </MainContent>
    );
  }
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;