import styled from 'styled-components';

export const Container404 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
`;

export const Title404 = styled.h1`
  font-size: 48px;
  color: #565EEF;
  margin-bottom: 20px;
`;

export const Text404 = styled.p`
  font-size: 18px;
  color: #94A6BE;
`;

export const HomeButton = styled.button`
  padding: 12px 24px;
  background-color: #565EEF;
  color: #FFFFFF;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;
  font-family: "Roboto", sans-serif;

  &:hover {
    background-color: #33399b;
  }

  @media screen and (max-width: 495px) {
    width: 80%;
    padding: 16px;
    font-size: 14px;
  }
`;