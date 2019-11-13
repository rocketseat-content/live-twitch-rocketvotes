import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    text-align: right;

    margin-right: 10px;

    strong {
      display: block;
      color: #fff;
    }
  }

  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }
`;

export const SignOut = styled.button`
  display: block;
  margin-top: 2px;
  font-size: 12px;
  color: #d95d5d;
  background: none;
  border: none;
`;
