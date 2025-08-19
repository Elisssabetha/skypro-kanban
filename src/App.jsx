import "./App.css";
import Header from "./components/header/Header";
import PopUser from "./components/popups/popUser/PopUser";
import PopNewCard from "./components/popups/popNewCard/PopNewCard";
import PopBrowse from "./components/popups/popBrowse/PopBrowse";
import Main from "./components/main/Main";


function App() {

  return (
    <>
      <div className="wrapper">
        {/* pop-up start */}

        <PopUser />
        <PopNewCard />
        <PopBrowse />

        {/* pop-up end */}

        <Header />
		<Main />
        
      </div>
    </>
  );
}

export default App;
