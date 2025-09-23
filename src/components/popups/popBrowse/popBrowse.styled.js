import styled from "styled-components";

export const PopBrowse = styled.div`
  /* display: none; */
  width: 100%;
  height: 100%;
  min-width: 375px;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 7;

  &:target {
    display: block;
  }

  @media screen and (max-width: 660px) {
    top: 70px;
  }
`;

export const PopBrowseContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);

  @media screen and (max-width: 660px) {
    padding: 0;
    justify-content: flex-start;
  }
`;

export const PopBrowseBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: #ffffff;
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 38px;
  border-radius: 10px;
  border: 0.7px solid #d4dbe5;
  position: relative;

  @media screen and (max-width: 660px) {
    border-radius: 0;
  }

  @media screen and (max-width: 495px) {
    padding: 20px 16px 32px;
  }
`;

export const PopBrowseContent = styled.div`
  display: block;
  text-align: left;

  .categories__theme {
    opacity: 1;
  }

  .theme-down {
    display: none;
    margin-bottom: 20px;

    @media screen and (max-width: 495px) {
      display: block;
      margin-bottom: 20px;
    }
  }

  .theme-top {
    display: block;

    @media screen and (max-width: 495px) {
      display: none;
    }
  }
`;

export const PopBrowseTopBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
`;

export const PopBrowseTtl = styled.h3`
  color: #000;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
`;

export const PopBrowseTheme = styled.div`
  display: inline-block;
  padding: 8px 20px;
  border-radius: 24px;
  opacity: ${(props) => (props.$active ? "1" : "0.4")};

  ${(props) =>
    props.$theme === "orange" &&
    `
    background-color: #FFE4C2;
    p { color: #FF6D00; }
  `}

  ${(props) =>
    props.$theme === "green" &&
    `
    background-color: #B4FDD1;
    p { color: #06B16E; }
  `}
  
  ${(props) =>
    props.$theme === "purple" &&
    `
    background-color: #E9D4FF;
    p { color: #9A48F1; }
  `}
  
  ${(props) =>
    props.$theme === "gray" &&
    `
    background-color: #94A6BE;
    p { color: #FFFFFF; }
  `}

  p {
    font-size: 14px;
    font-weight: 600;
    line-height: 14px;
    margin: 0;
    white-space: nowrap;
  }
`;

export const PopBrowseStatus = styled.div`
  margin-bottom: 11px;
`;

export const StatusThemes = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 7px;
  margin-top: 14px;
`;

export const StatusTheme = styled.div`
  border-radius: 24px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  padding: 11px 14px 10px;
  cursor: ${props => props.$clickable ? 'pointer' : 'default'};
  transition: all 0.2s ease;

  ${(props) =>
    props.$active &&
    `
    background-color: #94A6BE;
    p { color: #FFFFFF; }
  `}

  &:hover {
    background-color: #eaeef6;
  }

  p {
    font-size: 14px;
    line-height: 1;
    letter-spacing: -0.14px;
    margin: 0;
  }
`;

export const PopBrowseWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 20px;

  @media screen and (max-width: 660px) {
    flex-direction: column;
  }
`;

export const PopBrowseForm = styled.form`
  max-width: 370px;
  width: 100%;
  display: block;

  @media screen and (max-width: 660px) {
    max-width: 100%;
  }
`;

export const FormBrowseBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PopBrowseTextArea = styled.textarea`
  width: 100%;
  outline: none;
  padding: 14px;
  background: ${props => props.$editable ? '#ffffff' : '#eaeef6'};
  border: 0.7px solid ${props => props.$editable ? 'rgba(148, 166, 190, 0.4)' : 'transparent'};
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin-top: 14px;
  height: 200px;
  resize: vertical;

  &::placeholder {
    color: #94a6be;
    letter-spacing: -0.14px;
  }

  @media screen and (max-width: 495px) {
    height: 37px;
  }
`;

export const PopBrowseCategories = styled.div`
  margin-bottom: 20px;
`;

export const PopBrowseButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;

  @media screen and (max-width: 495px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 8px;

  @media screen and (max-width: 495px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const PopBrowseButton = styled.button`
  height: 30px;
  padding: 0 14px;
  border-radius: 4px;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s ease;

  ${(props) =>
    props.$variant === "bor" &&
    `
    border: 0.7px solid #565EEF;
    background: transparent;
    color: #565EEF;

    &:hover {
      background-color: #565EEF;
      color: #FFFFFF;
    }
  `}

  ${(props) =>
    props.$variant === "bg" &&
    `
    background: #565EEF;
    color: #FFFFFF;

    &:hover {
      background-color: #33399b;
    }
  `}

  @media screen and (max-width: 495px) {
    width: 100%;
    height: 40px;
  }
`;

export const ThemeTop = styled.div`
  display: block;

  @media screen and (max-width: 495px) {
    display: none;
  }
`;

export const ThemeDown = styled.div`
  display: none;
  margin-bottom: 20px;

  @media screen and (max-width: 495px) {
    display: block;
  }
`;
