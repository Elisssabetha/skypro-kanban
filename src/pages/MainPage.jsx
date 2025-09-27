import Header from "../components/header/Header";
import MainComponent from "../components/main/Main";
import { GlobalStyles } from "../components/GlobalStyles.styled";
import { Wrapper } from "../components/Shared.styled"
import { Outlet } from "react-router-dom";

const MainPage = () => {
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <Header />
        <MainComponent />
        <Outlet /> 
      </Wrapper>
    </>
  );
};

export default MainPage;
