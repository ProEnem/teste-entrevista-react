import React, { useRef } from 'react';

import {
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  TextInput,
} from 'react-native';
import { Formik } from 'formik';

import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { signinRequest } from '../../store/auth/auth.actions';

import Button from '../../components/Button';
import Input from '../../components/Input';
import * as Yup from 'yup';

import { Container, Logo } from './styles';

import imgLogo from '../../assets/logo.png';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().required(),
});

interface DataFormProps {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const inputPasswordRef = useRef<TextInput>(null);
  const { loading } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const initialValues: DataFormProps = {
    email: 'jose.couves@proenem.com.br',
    password: '12347',
  };

  function handleSubmitForm({ email, password }: DataFormProps) {
    dispatch(signinRequest(email, password));
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      enabled>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flex: 1 }}>
        <Container>
          <Logo source={imgLogo} />

          <Formik
            initialValues={initialValues}
            validationSchema={LoginSchema}
            onSubmit={handleSubmitForm}>
            {({ handleSubmit }) => (
              <>
                <Input
                  name="email"
                  placeholder="E-mail"
                  icon="email"
                  autoCorrect={false}
                  autoCapitalize="none"
                  keyboardType="email-address"
                  returnKeyType="next"
                  onSubmitEditing={() => {
                    inputPasswordRef.current?.focus();
                  }}
                />
                <Input
                  ref={inputPasswordRef}
                  name="password"
                  placeholder="Senha"
                  icon="lock"
                  secureTextEntry
                  returnKeyType="send"
                  onSubmitEditing={handleSubmit}
                />
                <Button
                  onPress={handleSubmit}
                  loading={loading}
                >
                  Entrar
                </Button>
              </>
            )}
          </Formik>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Login;
