import styled, { keyframes }  from "styled-components";

export const Main = styled.main`
  width: 100%;
  background-color: #eaeef6;
`;

export const MainBlock = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 25px 0 49px;

  @media screen and (max-width: 1200px) {
    width: 100%;
    margin: 0 auto;
    padding: 40px 0 64px;
  }
`;



export const MainContent = styled.div`
  width: 100%;
  display: flex;

  &.loading {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    font-size: 24px;
    color: #333;
    flex-direction: column;
    gap: 20px;
  }

  &.error {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    font-size: 18px;
    color: #e74c3c;
    text-align: center;
    
    button {
      margin-top: 20px;
      padding: 10px 20px;
      background-color: #565eef;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      
      &:hover {
        background-color: #33399b;
      }
    }
  }

  @media screen and (max-width: 1200px) {
    display: block;
  }
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const dots = keyframes`
  0%, 20% { color: rgba(0,0,0,0); text-shadow: .25em 0 0 rgba(0,0,0,0), .5em 0 0 rgba(0,0,0,0); }
  40% { color: #94A6BE; text-shadow: .25em 0 0 rgba(0,0,0,0), .5em 0 0 rgba(0,0,0,0); }
  60% { text-shadow: .25em 0 0 #94A6BE, .5em 0 0 rgba(0,0,0,0); }
  80%, 100% { text-shadow: .25em 0 0 #94A6BE, .5em 0 0 #94A6BE; }
`;

export const LoadingSpinner = styled.div`
  width: 40px;
  height: 40px;
  border: 4px solid #EAEEF6;
  border-top: 4px solid #94A6BE;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

export const LoadingText = styled.p`
  font-size: 16px;
  color: #94A6BE;
  
  &::after {
    content: '...';
    animation: ${dots} 1.5s steps(3, end) infinite;
  }
`;

export const Loader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

