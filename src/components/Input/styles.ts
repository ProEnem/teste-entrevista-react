import styled, { css } from 'styled-components/native';
import IconMaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';

interface ContainerProps {
  isError: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 40px;
  padding: 0 10px;
  margin-bottom: 10px;

  background-color: #fff;
  border-color: ${({ theme }) => theme.colors.gray50};
  border-radius: ${({ theme }) => theme.metrics.borderRadius};
  border-width: 1px;

  justify-content: space-between;
  align-items: center;
  flex-direction: row;

  ${({ isError}) => isError && css`
    border-color: ${({ theme }) => theme.colors.red};
  `}
`;

export const TextInput = styled.TextInput`
  flex: 1;
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.nunitoRegular};
  color: ${({ theme }) => theme.colors.black};
`;

export const Icon = styled(IconMaterialCommunity)`
  margin-right: 10px;
`;
