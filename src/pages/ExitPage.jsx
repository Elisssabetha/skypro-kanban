import PopExitComponent from "../components/popups/popExit/PopExit";
import { Wrapper } from "../components/Shared.styled";
import Header from "../components/header/Header";
import MainComponent from "../components/main/Main";
import { GlobalStyles } from "../components/GlobalStyles.styled";
const ExitPage = ({ setIsAuth, user }) => {
  return (
    <>
    <GlobalStyles />
    <Wrapper>
      <Header user={user}/>
      <MainComponent />
      <PopExitComponent setIsAuth={setIsAuth} />
    </Wrapper>
    </>
  );
};
export default ExitPage;
