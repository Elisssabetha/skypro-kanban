// валидация ввода данных
export function validateUserData(userData, isSignUp = false) {
    const errors = {};
    
    if (isSignUp && !userData.name?.trim()) {
       errors.name = 'Заполните имя';
    }
    
    if (!userData.login?.trim()) {
       errors.login = 'Заполните логин';
    }
    
    if (!userData.password?.trim()) {
       errors.password = 'Заполните пароль';
    }
    
    return errors;
 }

 
 