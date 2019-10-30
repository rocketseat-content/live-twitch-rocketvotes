import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 20px;

  background: #1f212a;
  max-width: 350px;
  width: 100%;
  margin-right: 30px;

  border: 1px solid #393c4d;
  border-radius: 8px;
  text-align: center;

  > h2 {
    color: #fff;
    font-size: 21px;

    margin-bottom: 13px;
  }

  > p {
    color: #999;
    font-size: 18px;

    margin-bottom: 25px;
  }
`;

export const Form = styled.form`
  width: 100%;
`;

export const TextInput = styled.input`
  background: #1a1b23;
  color: #fff;

  padding: 20px;
  border: 1px solid #393c4d;
  border-radius: 8px;
  width: 100%;

  margin-bottom: 10px;

  &::placeholder {
    font-weight: bold;
    text-transform: uppercase;

    color: #fff;
    opacity: 0.6;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  min-width: 100%;
  max-width: 100%;
  min-height: 220px;
  max-height: 220px;

  background: #1a1b23;
  color: #fff;

  padding: 20px;
  border: 1px solid #393c4d;
  border-radius: 8px;

  margin-bottom: 20px;

  &::placeholder {
    font-weight: bold;
    text-transform: uppercase;

    color: #fff;
    opacity: 0.6;
  }
`;

export const Button = styled.button`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  padding: 16px 0;

  background: #7159c1;

  border: none;
  border-radius: 8px;
  text-transform: uppercase;
`;
