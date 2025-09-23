import { Wrapper } from "../components/Shared.styled";
import Header from "../components/header/Header";
import MainComponent from "../components/main/Main";
import { GlobalStyles } from "../components/GlobalStyles.styled";
// import { useParams } from "react-router-dom";
import PopBrowseСomponent from "../components/popups/popBrowse/PopBrowse";

const CardPage = ({ user }) => {
  return (
    <>
    <GlobalStyles />
    <Wrapper>
      <Header user={user}/>
      <MainComponent />
      <PopBrowseСomponent />
    </Wrapper>
    </>
  );
};
export default CardPage;