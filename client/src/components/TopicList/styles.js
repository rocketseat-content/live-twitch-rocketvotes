import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
`;

export const Info = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  color: #fff;
  font-size: 16px;
  margin-top: 40px;

  > section {
    & + section {
      margin-top: 30px;
    }
  }
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 40px;

  p {
    color: #fff;
    margin-right: 20px;
    font-size: 16px;
    ${({ hasPrev }) => hasPrev && 'margin-left: 20px;'}
  }

  > button {
    color: #999;
    font-size: 16px;

    background: none;
    border: none;
  }
`;
