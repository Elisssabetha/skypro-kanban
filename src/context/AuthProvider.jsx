import { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";


const checkLs = () => {
  try {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  } catch (error) {
    console.error("Ошибка при загрузке данных из localStorage:", error);
    return null;
  }
};

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(checkLs());
  const [isAuth, setIsAuth] = useState(!!localStorage.getItem("isAuth"));

  useEffect(() => {
    try {
      const storedUser = localStorage.getItem("user");
      const storedIsAuth = localStorage.getItem("isAuth");
      
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
      if (storedIsAuth === "true") {
        setIsAuth(true);
      }
    } catch (error) {
      console.error("Ошибка при загрузке данных из localStorage:", error);
    }
  }, []);


  const updateUserInfo = (userData) => {
    setUser(userData);
    if (userData) {
      localStorage.setItem("user", JSON.stringify(userData));
      localStorage.setItem("isAuth", "true");
      setIsAuth(true);
    } else {
      localStorage.removeItem("user");
      localStorage.removeItem("isAuth");
      localStorage.removeItem("authToken");
      setIsAuth(false);
    }
  };

  const login = (loginData) => {
    updateUserInfo(loginData.user);
    localStorage.setItem("authToken", loginData.user.token);
    return true;
  };

  const logout = () => {
    updateUserInfo(null);
    return true;
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      isAuth, 
      login, 
      logout, 
      updateUserInfo,
      setUser,
      setIsAuth 
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;