import AppRoutes from "./components/AppRoutes";
import { TasksProvider } from "./context/TasksProvider";
import AuthProvider from "./context/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <TasksProvider>
        <AppRoutes />
      </TasksProvider>
    </AuthProvider>
  );
}

export default App;
