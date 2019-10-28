import styled from 'styled-components';

export default styled.div`
  margin: 0 auto;
  padding: 0 30px;
  max-width: 940px;
  height: 100%;

  main {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

export const Topics = styled.div`
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
