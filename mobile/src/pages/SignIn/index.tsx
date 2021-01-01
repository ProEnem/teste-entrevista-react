import React, { useCallback, useRef } from 'react';
import {
  Image,
  View,
  Alert,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  TextInput,
  Platform,
} from 'react-native';
import * as Yup from 'yup';

import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import { useDispatch, useSelector } from 'react-redux';
import { signInRequest } from '../../store/modules/auth/actions';
import { IState } from '../../store';
import { IAuthState } from '../../store/modules/auth/types';

import getValidationErrors from '../../utils/getValidationErrors';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImg from '../../assets/proenem.png';

import { Container, Title, SubTitle } from './styles';

interface ISignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const passwordInputRef = useRef<TextInput>(null);

  const dispatch = useDispatch();

  const { isError, message } = useSelector<IState, IAuthState>(state => {
    return state.auth;
  });

  const handleSubmit = useCallback(
    async (data: ISignInFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('E-mail inválido'),
          password: Yup.string().required('Senha obrigatório'),
        });

        await schema.validate(data, { abortEarly: false });

        dispatch(signInRequest(data));
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
          return;
        }

        Alert.alert(
          'Erro na autenticação',
          'Erro ao fazer login, cheque as credenciais.',
        );
      }
    },
    [dispatch],
  );

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      enabled
    >
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flex: 1 }}
      >
        <Container>
          <Image source={logoImg} />

          <View>
            <Title>Bem vindo de volta.</Title>
            <SubTitle>Faça login e boas aulas!</SubTitle>
          </View>

          {isError && (
            <View style={{ marginBottom: 10 }}>
              <Text style={{ color: 'red' }}>{message}</Text>
            </View>
          )}

          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              name="email"
              icon="mail"
              placeholder="Seu e-mail"
              returnKeyType="next"
              onSubmitEditing={() => passwordInputRef.current?.focus()}
            />

            <Input
              ref={passwordInputRef}
              secureTextEntry
              name="password"
              icon="lock"
              placeholder="Sua senha"
              returnKeyType="send"
              onSubmitEditing={() => formRef.current?.submitForm()}
            />
          </Form>

          <Button onPress={() => formRef.current?.submitForm()} icon="log-in">
            Entrar
          </Button>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignIn;
