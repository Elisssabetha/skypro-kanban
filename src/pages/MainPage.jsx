import Header from "../components/header/Header";
import MainComponent from "../components/main/Main";
import { GlobalStyles } from "../components/GlobalStyles.styled";
import { Wrapper } from "../components/Shared.styled";

const MainPage = ( {loading, user} ) => {
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <Header user={user}/>
        <MainComponent loading={loading}/>
      </Wrapper>
    </>
  );
};

export default MainPage;
