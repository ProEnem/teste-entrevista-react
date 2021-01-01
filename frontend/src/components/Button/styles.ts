import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #df1f3d;
  height: 56px;
  border-radius: 5px;
  border: 0;
  padding: 0 16px;
  color: #ffffff;
  font-weight: 700;
  width: 100%;
  margin-top: 32px;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#df1f3d')};
  }
`;
