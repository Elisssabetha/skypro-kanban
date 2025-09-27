import styled from "styled-components";

export const PopNewCard = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  min-width: 375px;
  min-height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.4);
`;

export const PopNewCardContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const PopNewCardBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: #FFFFFF;
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 48px;
  border-radius: 10px;
  border: 0.7px solid #D4DBE5;
  position: relative;
`;

export const PopNewCardContent = styled.div`
  display: block;
  text-align: left;
`;

export const PopNewCardTtl = styled.h3`
  color: #000;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  margin-bottom: 20px;
`;

export const PopNewCardClose = styled.button`
  position: absolute;
  top: 20px;
  right: 30px;
  color: #94A6BE;
  cursor: pointer;
  font-size: 20px;
  text-decoration: none;
  background: none;
  border: none;
  padding: 0;
  
  &:hover {
    color: #000000;
  }
`;

export const PopNewCardWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 20px; 
  
  @media screen and (max-width: 660px) {
    flex-direction: column;
  }
`;

export const PopNewCardForm = styled.form`
  max-width: 370px;
  width: 100%;
  display: block;
`;

export const FormNewBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormNewInput = styled.input`
  width: 100%;
  outline: none;
  padding: 14px;
  background: transparent;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin: 20px 0;
  font-family: "Roboto", sans-serif; 

  &::placeholder {
    color: #94A6BE;
    letter-spacing: -0.14px;
    font-family: "Roboto", sans-serif; 
    font-weight: 400;
    font-size: 14px;
  }
`;

export const FormNewArea = styled.textarea`
  width: 100%;
  outline: none;
  padding: 14px;
  background: transparent;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin-top: 14px;
  height: 200px;
  resize: vertical;
  font-family: "Roboto", sans-serif; 

  &::placeholder {
    color: #94A6BE;
    letter-spacing: -0.14px;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 14px;
  }
`;

export const Categories = styled.div`
  margin-bottom: 20px; 
`;

export const CategoriesP = styled.p`
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  margin-bottom: 14px; 
`;

export const CategoriesThemes = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 7px;
`;

export const CategoryTheme = styled.div`
  display: inline-block;
  width: auto;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  opacity: ${props => props.$active ? '1' : '0.4'};
  cursor: pointer;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.8;
  }

  ${props => props.$theme === 'orange' && `
    background-color: #FFE4C2;
    p { color: #FF6D00; }
  `}

  ${props => props.$theme === 'green' && `
    background-color: #B4FDD1;
    p { color: #06B16E; }
  `}

  ${props => props.$theme === 'purple' && `
    background-color: #E9D4FF;
    p { color: #9A48F1; }
  `}

  p {
    font-size: 14px;
    font-weight: 600;
    line-height: 14px;
    white-space: nowrap;
    margin: 0;
    font-family: "Roboto", sans-serif;
  }
`;

export const FormNewCreate = styled.button`
  width: 132px;
  height: 30px;
  background-color: #565EEF;
  border-radius: 4px;
  border: 0;
  outline: none;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  color: #FFFFFF;
  float: right;
  cursor: pointer;
  transition: background-color 0.2s ease;
  font-family: "Roboto", sans-serif;

  &:hover {
    background-color: #33399b;
  }

  @media screen and (max-width: 495px) {
    width: 100%;
    height: 40px;
    float: none;
  }
`;