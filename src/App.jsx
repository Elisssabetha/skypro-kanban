import AppRoutes from "./components/AppRoutes";
import { TasksProvider } from "./context/TasksProvider";
import AuthProvider from "./context/AuthProvider";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <AuthProvider>
      <TasksProvider>
        <AppRoutes />
        <ToastContainer 
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </TasksProvider>
    </AuthProvider>
  );
}

export default App;
