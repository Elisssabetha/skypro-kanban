import { useState } from "react";
import * as S from "./Header.styled";
import { Container } from "../Shared.styled";
const Header = () => {
  // фиксируем что изначально попап не виден, а переключается через функцию setUserPopupVisible
  const [isUserPopupVisible, setUserPopupVisible] = useState(false);

  // при клике меняет значение isUserPopupVisible на противоположенное
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
              <a href="#popNewCard">Создать новую задачу</a>
            </S.HeaderBtnMainNew>
            <S.HeaderUser href="#user-set-target" onClick={toggleUserPopup}>
              Ivan Ivanov
            </S.HeaderUser>
            <S.PopUserSet id="user-set-target" $isVisible={isUserPopupVisible}>
              {/* <!-- <a href="">x</a> --> */}
              <S.PopUserName>Ivan Ivanov</S.PopUserName>
              <S.PopUserMail>ivan.ivanov@gmail.com</S.PopUserMail>
              <S.PopUserTheme>
                <p>Темная тема</p>
                <input type="checkbox" className="checkbox" name="checkbox" />
              </S.PopUserTheme>
              <S.PopUserButton>
                <a href="#popExit">Выйти</a>
              </S.PopUserButton>
            </S.PopUserSet>
          </S.HeaderNav>
        </S.HeaderBlock>
      </Container>
    </S.Header>
  );
};

export default Header;
