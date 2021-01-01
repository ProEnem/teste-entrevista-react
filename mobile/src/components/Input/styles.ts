import styled, { css } from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

interface IContainerProps {
  isFocused: boolean;
  isErrored: boolean;
}

export const Container = styled.View<IContainerProps>`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  border-radius: 10px;
  margin-bottom: 8px;
  background: #ffffff;
  border: 1px solid #dddddd;

  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${props =>
    props.isFocused &&
    css`
      border-color: #4b4b4b;
    `}

  flex-direction: row;
  align-items: center;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  font-family: 'Nunito-Regular';
  font-size: 16px;
  color: #24282c;
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 12px;
`;
