import { useState } from "react";
import * as S from "./Header.styled";
import { Container } from "../Shared.styled";
import { Link } from "react-router-dom";
const Header = () => {

  const [isUserPopupVisible, setUserPopupVisible] = useState(false);
  const toggleUserPopup = (e) => {
    e.preventDefault(e);
    setUserPopupVisible(!isUserPopupVisible);
  };

  return (
    <S.Header>
      <Container>
        <S.HeaderBlock>
          <S.HeaderLogo className="light">
            <a href="" target="_self">
              <img src="images/logo.png" alt="logo" />
            </a>
          </S.HeaderLogo>
          <S.HeaderLogo className="dark">
            <a href="" target="_self">
              <img src="images/logo_dark.png" alt="logo" />
            </a>
          </S.HeaderLogo>
          <S.HeaderNav>
            <S.HeaderBtnMainNew id="btnMainNew">
              <Link to="/new-card">Создать новую задачу</Link>
            </S.HeaderBtnMainNew>
            <S.HeaderUser href="#user-set-target" onClick={toggleUserPopup}>
              Ivan Ivanov
            </S.HeaderUser>
            <S.PopUserSet id="user-set-target" $isVisible={isUserPopupVisible}>
              <S.PopUserName>Ivan Ivanov</S.PopUserName>
              <S.PopUserMail>ivan.ivanov@gmail.com</S.PopUserMail>
              <S.PopUserTheme>
                <p>Темная тема</p>
                <input type="checkbox" className="checkbox" name="checkbox" />
              </S.PopUserTheme>
              <S.PopUserButton>
                <Link to="/exit">Выйти</Link>
              </S.PopUserButton>
            </S.PopUserSet>
          </S.HeaderNav>
        </S.HeaderBlock>
      </Container>
    </S.Header>
  );
};

export default Header;
