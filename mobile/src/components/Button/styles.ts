import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import FeatherIcon from 'react-native-vector-icons/Feather';

export const Container = styled(RectButton)`
  width: 100%;
  height: 60px;
  background: #df1f3d;
  border-radius: 10px;
  margin-top: 12px;

  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-family: 'Nunito-Bold';
  font-size: 18px;
  color: #fff;
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 12px;
`;
