import PopExitComponent from "../components/popups/popExit/PopExit";
import { Wrapper } from "../components/Shared.styled";
import Header from "../components/header/Header";
import MainComponent from "../components/main/Main";
import { GlobalStyles } from "../components/GlobalStyles.styled";
const ExitPage = ({ setIsAuth }) => {
  return (
    <>
    <GlobalStyles />
    <Wrapper>
      <Header />
      <MainComponent />
      <PopExitComponent setIsAuth={setIsAuth} />
    </Wrapper>
    </>
  );
};
export default ExitPage;
