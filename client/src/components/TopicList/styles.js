import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;

  > section {
    & + section {
      margin-top: 30px;
    }
  }
`;
