import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #ffffff;
  border-radius: 5px;
  padding: 16px;
  width: 100%;
  font-weight: 300;

  display: flex;
  align-items: center;

  border: 1px solid #dddddd;
  color: #b5b8bf;

  & + div {
    margin-top: 14px;
  }

  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${props =>
    props.isFocused &&
    css`
      border: 1px solid #4b4b4b;
      color: #4b4b4b;
    `}

  ${props =>
    props.isFilled &&
    css`
      color: #4b4b4b;
    `}

  input {
    flex: 1;
    background: transparent;
    border: 0;

    &::placeholder {
      color: #b5b8bf;
    }
  }

  span {
    font-size: 12px;
    color: #c53030;
  }

  svg {
    margin-right: 16px;
  }
`;
