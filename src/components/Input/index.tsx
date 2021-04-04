import React, { forwardRef } from 'react';

import { TextInputProps } from 'react-native';
import { useField } from 'formik';

import { Container, TextInput, Icon } from './styles';
import { useTheme } from 'styled-components';

interface InputProps extends TextInputProps {
  name: string;
  icon?: string;
}

interface inputRef {
  focus(): void;
}

const Input: React.ForwardRefRenderFunction<inputRef, InputProps> = ({ name, icon, ...rest }, ref) => {
  const [field, meta] = useField(name);
  const isError = meta.touched && !!meta.error;
  const theme = useTheme();

  return (
    <Container
      isError={isError}
    >
      {icon && <Icon name={icon} size={18} color={isError ? theme.colors.red : theme.colors.gray50} />}
      <TextInput
        placeholderTextColor={theme.colors.gray50}
        onChangeText={field.onChange(name)}
        onBlur={field.onBlur(name)}
        defaultValue={field.value}
        ref={ref}
        {...rest}
      />
    </Container>
  );
}

export default forwardRef(Input);
