import styled from 'styled-components';
import { lighten } from 'polished';

export const Button = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  border-radius: 8px;
  background: #14151b;
  color: #fff;
  transition: all ease-in-out 200ms;
  text-decoration: none;

  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.12);
  padding: 0 2rem;
  height: 3rem;
  line-height: 3rem;
  text-align: center;

  &:hover {
    background: ${lighten('0.02', '#14151b')};
  }

  svg {
    margin-right: 10px;
    width: 20px;
    height: 20px;
  }
`;
