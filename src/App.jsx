import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import PopUser from "./components/popups/popUser/PopUser";
import PopNewCard from "./components/popups/popNewCard/PopNewCard";
import PopBrowse from "./components/popups/popBrowse/PopBrowse";
import MainContent from "./components/main/Main";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="wrapper">
        {/* pop-up start */}

        <PopUser />
        <PopNewCard />
        <PopBrowse />

        {/* pop-up end */}

        <Header />
		<MainContent />
        
      </div>

      <script src="js/script.js"></script>
    </>
  );
}

export default App;
