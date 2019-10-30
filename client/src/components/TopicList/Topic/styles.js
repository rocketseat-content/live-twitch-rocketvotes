import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 100%;
  height: 100%;
  max-height: 80px;
`;

export const Votes = styled.button`
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
`;

export const Info = styled.div`
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
