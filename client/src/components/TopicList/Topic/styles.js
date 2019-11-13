import styled from 'styled-components';
import ReactModal from 'react-modal';

export const Container = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 100%;
  height: 100%;
  max-height: 80px;
`;

export const Modal = styled(ReactModal).attrs({
  style: {
    overlay: {
      backgroundColor: 'rgba(16, 16, 18, 0.9)',
    },
  },
})`
  width: 100%;
  height: 100%;
  max-height: 500px;
  max-width: 700px;
  background-color: #252529;
  position: fixed;
  top: 50%;
  left: 50%;
  border-radius: 8px;
  transform: translate(-50%, -50%);
  position: relative;
  padding: 30px 20px;
  color: #fff;

  > button {
    background: none;
    border: none;
    position: absolute;
    top: 5px;
    right: 10px;
    font-size: 24px;
    color: #fff;
    transition: opacity 150ms;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      opacity: 0.8;
    }

    @media (max-width: 600px) {
      display: none;
    }
  }

  @media (max-width: 600px) {
    width: calc(100% - 32px);
    max-height: 360px;
  }
`;

export const Votes = styled.button`
  cursor: default;

  border-radius: 5px;
  width: 100%;
  max-width: 50px;
  height: 100%;
  font-size: 18px;
  color: #999999;
  margin-right: 15px;
  background: #1f212a;
  border: 1px solid #393c4d;
  padding: 10px;

  margin-top: 5px;
  align-self: flex-start;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;

  > svg {
    cursor: pointer;
  }
`;

export const Info = styled.div`
  cursor: pointer;

  h2 {
    font-size: 18px;
    margin-bottom: 8px;
    color: #fff;
  }

  p {
    color: #999999;
    line-height: 1.6;
  }
`;
