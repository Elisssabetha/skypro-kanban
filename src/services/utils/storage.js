// localStorage

export const storage = {
    // Сохранение данных авторизации
    saveAuthData: (authData) => {
       localStorage.setItem('authData', JSON.stringify(authData));
    },
    
    // Получение данных авторизации
    getAuthData: () => {
       const data = localStorage.getItem('authData');
       return data ? JSON.parse(data) : null;
    },
    
    // Получение токена
    getToken: () => {
       const authData = storage.getAuthData();
       return authData?.token || null;
    },
    
    // Получение данных пользователя
    getUser: () => {
       const authData = storage.getAuthData();
       return authData?.user || null;
    },
    
    // Очистка данных авторизации
    clearAuthData: () => {
       localStorage.removeItem('authData');
    }
 };