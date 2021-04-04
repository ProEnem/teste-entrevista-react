import React from 'react';
import { ActivityIndicator } from 'react-native';

import { RectButtonProps } from 'react-native-gesture-handler';

import { Container, ButtonText } from './styles';

interface ButtonProps extends RectButtonProps {
  children: string;
  loading?: boolean;
  onPress: () => void;
}

const Button: React.FC<ButtonProps> = ({ loading = false, children, ...rest }) => (
  <Container {...rest}>
    {loading ?
      <ActivityIndicator size="small" color="#fff" /> : (
      <ButtonText>{children}</ButtonText>
    )}
  </Container>
)

export default Button;
