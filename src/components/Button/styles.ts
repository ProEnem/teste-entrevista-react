import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 100%;
  height: 40px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.red};
  border-radius: ${({ theme }) => theme.metrics.borderRadius};
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-family: ${({ theme }) => theme.fonts.nunitoBold};
`;
