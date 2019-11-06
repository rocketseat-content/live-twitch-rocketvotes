import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid #393c4d;
  border-radius: 8px;
  text-align: center;
  background: #1f212a;
  box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2);
  padding: 30px 20px;

  > h2 {
    color: #fff;
    font-size: 18px;

    margin-bottom: 10px;
  }

  > p {
    color: #999;
    font-size: 13px;
    line-height: 1.6;

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
    text-transform: uppercase;

    color: #fff;
    opacity: 0.6;
  }
`;

export const Button = styled.button`
  color: #fff;
  font-size: 14px;
  padding: 16px 0;
  width: 100%;

  background: #7159c1;

  border: none;
  border-radius: 8px;
  text-transform: uppercase;
`;
