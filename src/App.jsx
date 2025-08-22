import "./App.css";
import Header from "./components/header/Header";
import PopUser from "./components/popups/popUser/PopUser";
import PopNewCard from "./components/popups/popNewCard/PopNewCard";
import PopBrowse from "./components/popups/popBrowse/PopBrowse";
import MainComponent from "./components/main/Main";
import { GlobalStyles } from "./components/GlobalStyles.styled";
import { Wrapper } from "./components/Shared.styled";

function App() {
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        {/* pop-up start */}

        <PopUser />
        <PopNewCard />
        <PopBrowse />

        {/* pop-up end */}

        <Header />
        <MainComponent />
      </Wrapper>
    </>
  );
}

export default App;
