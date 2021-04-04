import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import IconMaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';

export const Container = styled(RectButton)`
  flex: 1;
  justify-content: center;
  align-items: center;

  height: 100px;
  padding: 5px;
  margin: 10px 20px;
  border-radius: ${({ theme }) => theme.metrics.borderRadius};
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.gray50};

  background-color: #fff;

  /* box-shadow: 0px 0.5px 3px ${({ theme }) => theme.colors.black}; */
`;

export const Title = styled.Text`
  font-size: 20px;
  font-family: ${({ theme }) => theme.fonts.nunitoBold};
  color: ${({ theme }) => theme.colors.red};
`;

export const IconCalendar = styled(IconMaterialCommunity).attrs(props => ({
  name: 'calendar',
  size: 20,
  color: props.theme.colors.gray50,
}))`
  margin-right: 5px;
`;


export const ContainerDate = styled.View`
  flex-direction: row;
`;

export const DateText = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.nunitoBold};
  color: ${({ theme }) => theme.colors.gray50};
`;

