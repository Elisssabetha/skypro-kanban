import AppRoutes from "./components/AppRoutes";
import { TasksProvider } from "./context/TasksProvider";


function App() {
  return (
    <TasksProvider>
      <AppRoutes />
    </TasksProvider>
  );
}

export default App;
