import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

  > section {
    & + section {
      margin-top: 30px;
    }
  }
`;
