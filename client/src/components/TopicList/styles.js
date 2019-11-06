import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  color: #fff;
  font-size: 16px;

  > section {
    & + section {
      margin-top: 30px;
    }
  }
`;
