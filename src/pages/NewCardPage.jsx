import { Wrapper } from "../components/Shared.styled";
import Header from "../components/header/Header";
import { GlobalStyles } from "../components/GlobalStyles.styled";
import PopNewCardComponent from "../components/popups/popNewCard/PopNewCard";
import MainComponent from "../components/main/Main";

const NewCardPage = ({user}) => {
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <Header user={user}/>
        <MainComponent />
        <PopNewCardComponent />
      </Wrapper>
    </>
  );
};

export default NewCardPage;