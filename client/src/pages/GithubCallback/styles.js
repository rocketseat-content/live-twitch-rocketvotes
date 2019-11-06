import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(15px);
  }

  100% {
    transform: translateY(0);
  }
`;

export const Container = styled.div`
  height: 100vh;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  text-align: center;
  color: #fff;

  h3 {
    font-size: 18px;
  }

  svg {
    color: #fff;
    margin-bottom: 35px;
    animation: ${pulse} ease-in-out 3s infinite;
  }

  @media (max-width: 768px) {
    svg {
      width: 36px;
      margin-bottom: 24px;
    }

    h3 {
      font-size: 16px;
    }
  }
`;
