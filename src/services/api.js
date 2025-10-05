import axios from 'axios'

const API_URL = 'https://wedev-api.sky.pro/api/kanban'

// обработка ошибок
const handleApiError = (error, defaultMessage) => {
   if (error.code === 'NETWORK_ERROR' || error.message === 'Network Error') {
     throw new Error('Проблемы с сетью. Проверьте подключение к интернету');
   }
   
   if (error.response?.status === 401) {
     throw new Error('Неавторизованный доступ. Пожалуйста, войдите снова');
   }
   
   if (error.response?.status === 404) {
     throw new Error('Задача не найдена');
   }
   
   if (error.response?.status === 500) {
     throw new Error('Ошибка сервера. Попробуйте позже');
   }
   
   const errorMessage = error.response?.data?.message || 
                       error.response?.data?.error ||
                       error.message ||
                       defaultMessage;
   
   throw new Error(errorMessage);
 };


// получение задач
export async function fetchTasks({token}) {
   try {
      const response = await axios.get(`${API_URL}`, {
         headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': '',
         },
      })
      return response.data
   } catch (error) {
      handleApiError(error, 'Ошибка при получении задач')
      console.error("Детали ошибки от сервера:", error.response?.data);
      
   }
}

// получение одной по ИД
export async function fetchTask({ token, taskId }) {
   try {
      const response = await axios.get(`${API_URL}/${taskId}`, {
         headers: {
            Authorization: 'Bearer ' + token,
         },
      })
      return response.data
   } catch (error) {
      handleApiError(error, 'Ошибка при получении задачи')
   }
}

// создание задачи
export async function createTask({ token, taskData }) {
   try {
       const response = await axios.post(`${API_URL}`, taskData, {
           headers: {
               Authorization: `Bearer ${token}`,
               'Content-Type': '',
           },
       });
       return response.data;
   } catch (error) {
      handleApiError(error, 'Ошибка при создании задачи');
   }
}

// обновление
export async function updateTask({ token, taskId, taskData }) {
   try {
       const response = await axios.put(`${API_URL}/${taskId}`, taskData, {
           headers: {
               Authorization: `Bearer ${token}`,
               'Content-Type': '',
           },
       });
       return response.data;
   } catch (error) {
      handleApiError(error, 'Ошибка при обновлении задачи');
   }
}

// удаление
export async function deleteTask({ token, taskId }) {
   try {
       const response = await axios.delete(`${API_URL}/${taskId}`, {
           headers: {
               Authorization: `Bearer ${token}`,
           },
       });
       return response.data;
   } catch (error) {
      handleApiError(error, 'Ошибка при удалении задачи');
   }
}