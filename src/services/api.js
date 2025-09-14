import axios from 'axios'

const API_URL = 'https://wedev-api.sky.pro/api/kanban'

// получение задач
export async function fetchTasks({token}) {
   try {
      const response = await axios.get(`${API_URL}/tasks`, {
         headers: {
            Authorization: `Bearer ${token}`,
         },
      })
      return response.data
   } catch (error) {
      const errorMessage = error.response?.data?.message || 
                          error.response?.data?.error ||
                          error.message ||
                          'Ошибка при получении задач';
      console.error("Детали ошибки от сервера:", error.response?.data);
      throw new Error(errorMessage);
   }
}

// получение одной по ИД
export async function fetchTask({ token, taskId }) {
   try {
      const response = await axios.get(`${API_URL}/tasks/${taskId}`, {
         headers: {
            Authorization: 'Bearer ' + token,
         },
      })
      return response.data
   } catch (error) {
      throw new Error(error.response?.data?.error || 'Ошибка при получении задачи');
   }
}

// создание задачи
export async function createTask({ token, taskData }) {
   try {
       const response = await axios.post(`${API_URL}/tasks`, taskData, {
           headers: {
               Authorization: `Bearer ${token}`,
               'Content-Type': '',
           },
       });
       return response.data;
   } catch (error) {
       throw new Error(error.response?.data?.error || 'Ошибка при создании задачи');
   }
}

// обновление
export async function updateTask({ token, taskId, taskData }) {
   try {
       const response = await axios.put(`${API_URL}/tasks/${taskId}`, taskData, {
           headers: {
               Authorization: `Bearer ${token}`,
               'Content-Type': '',
           },
       });
       return response.data;
   } catch (error) {
       throw new Error(error.response?.data?.error || 'Ошибка при обновлении задачи');
   }
}

// удаление
export async function deleteTask({ token, taskId }) {
   try {
       const response = await axios.delete(`${API_URL}/tasks/${taskId}`, {
           headers: {
               Authorization: `Bearer ${token}`,
           },
       });
       return response.data;
   } catch (error) {
       throw new Error(error.response?.data?.error || 'Ошибка при удалении задачи');
   }
}