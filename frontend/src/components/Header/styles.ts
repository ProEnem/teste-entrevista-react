import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background: #df1f3d;

  img {
    margin-left: 16px;
  }

  button {
    display: flex;
    align-items: center;
    text-decoration: none;
    height: 60px;
    color: #fff;
    margin-right: 16px;
    border: none;
    background: transparent;
    transition: color 0.2s;

    &:hover {
      color: ${shade(0.2, '#fff')};
    }

    svg {
      margin-right: 4px;
    }
  }
`;
