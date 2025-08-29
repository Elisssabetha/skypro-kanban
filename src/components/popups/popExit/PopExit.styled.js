import styled from "styled-components";

export const PopExit = styled.div`
  display: ${(props) => (props.$isVisible ? "block" : "none")};
  width: 100%;
  height: 100%;
  min-width: 320px;
  min-height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
`;

export const PopExitContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
`;

export const PopExitBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: #ffffff;
  max-width: 370px;
  width: 100%;
  padding: 50px 60px;
  border-radius: 10px;
  border: 0.7px solid #d4dbe5;
  box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);

  @media screen and (max-width: 375px) {
    padding: 50px 20px;
  }
`;

export const PopExitTtl = styled.div`
  /* text-align: center;
  margin-bottom: 20px; */

  h2 {
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: -0.4px;
    margin-bottom: 20px;
  }
`;

export const ExitButton = styled.button`
  width: 153px;
  height: 30px;
  background-color: ${(props) => (props.$primary ? "#565EEF" : "transparent")};
  border-radius: 4px;
  border: ${(props) => (props.$primary ? "none" : "0.7px solid #565EEF")};
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  letter-spacing: -0.14px;
  color: ${(props) => (props.$primary ? "#FFFFFF" : "#565EEF")};
  cursor: pointer;
  transition: all 0.2s ease;
  margin-right: ${(props) => (props.$primary ? "10px" : 0)};

  &:hover {
    background-color: ${(props) => (props.$primary ? "#33399b" : "#565EEF")};
    color: #ffffff;
  }

  @media screen and (max-width: 375px) {
    width: 100%;
    height: 40px;
    margin-bottom: 10px;
  }
`;

export const PopExitFormGroup = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 375px) {
    flex-direction: column;
  }
`;
