import React, { useCallback, useRef } from 'react';
import { FiMail, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { useDispatch, useSelector } from 'react-redux';
import { signInRequest } from '../../store/modules/auth/actions';
import { IState } from '../../store';
import { IAuthState } from '../../store/modules/auth/types';

import getValidationErrors from '../../utils/getValidationErrors';

import logoImg from '../../assets/proenem.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import {
  Container,
  ContentLeft,
  ContentRight,
  ContainerSocial,
} from './styles';

interface ISignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
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
        }
      }
    },
    [dispatch],
  );

  return (
    <Container>
      <ContentLeft>
        <header>
          <h1>O primeiro passo aqui é mais fácil</h1>
          <h2>Bem vindo de volta. Faça login e boas aulas!</h2>
        </header>

        {isError && <span>{message}</span>}

        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input name="email" icon={FiMail} placeholder="Seu e-mail" />
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Sua senha"
          />
          <a href="forgot">Esqueci minha senha</a>

          <Button type="submit">Entrar</Button>

          <p>ou</p>

          <ContainerSocial>
            <a href="facebook">
              <svg width="1em" height="1em" viewBox="0 0 32 32" fill="none">
                <path
                  d="M28.5.337L3.5.5a3.009 3.009 0 00-3 3L.618 28.38a3.009 3.009 0 003 3L17 32V19h-3.5v-5H17v-2.5c.08-2.803.805-5.297 5.559-5.5h3.94v4.956h-3.33a1.573 1.573 0 00-1.67 1.544V14h5l-.852 5H21.5v13l7-.619a3.01 3.01 0 003-3V3.337a3.009 3.009 0 00-3-3z"
                  fill="#4267B2"
                />
                <path
                  opacity="0.15"
                  d="M5 .5C4.09.5 3.643 1.626 3 1c-.23-.223-.04.5-.059.502-.96.072-1.441 1.866-1.441.998L1 27.603a4.388 4.388 0 001.15 2.932A4.61 4.61 0 005 32V.5z"
                  fill="#ADB7CD"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.617 0h24.766A3.628 3.628 0 0132 3.617v24.766A3.628 3.628 0 0128.383 32h-7.145a.762.762 0 01-.762-.762v-12.38c0-.422.341-.763.762-.763h3.306l.553-3.238h-3.86a.762.762 0 01-.761-.762V12.654a2.262 2.262 0 012.372-2.219h2.39V7.24h-2.974c-2.128.093-3.175.688-3.734 1.399-.586.745-.777 1.786-.816 3.088v2.37c0 .42-.34.761-.762.761h-2.571v3.238h2.571c.421 0 .762.341.762.762v12.381c0 .42-.34.762-.762.762H3.617A3.628 3.628 0 010 28.383V3.617A3.628 3.628 0 013.617 0zm.003 1.524A2.104 2.104 0 001.524 3.62v24.76a2.104 2.104 0 002.096 2.096h12.57V19.62H13.62a.762.762 0 01-.762-.762v-4.762c0-.42.341-.762.762-.762h2.572v-1.619-.021c.04-1.363.232-2.84 1.141-3.997.936-1.19 2.494-1.879 4.883-1.98l.032-.001H26c.421 0 .762.34.762.762v4.72c0 .42-.341.762-.762.762h-3.173c-.015 0-.03 0-.045-.002a.737.737 0 00-.782.718v.658h4a.762.762 0 01.75.89l-.812 4.762a.762.762 0 01-.751.634H22v10.857h6.38a2.104 2.104 0 002.096-2.096V3.62a2.104 2.104 0 00-2.096-2.096H3.62z"
                  fill="#2E4369"
                />
              </svg>
              <span>Fazer login com Facebook</span>
            </a>
          </ContainerSocial>
        </Form>

        <footer>
          <a
            href="https://www.proenem.com.br/termos-de-uso"
            target="_blank"
            rel="noopener noreferrer"
          >
            Termos de uso
          </a>
          <a
            href="https://www.proenem.com.br/quem-somos"
            target="_blank"
            rel="noopener noreferrer"
          >
            Quem somos
          </a>
        </footer>
      </ContentLeft>
      <ContentRight>
        <img src={logoImg} alt="proenem" />
        <svg
          width="112"
          height="113"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="one"
        >
          <path
            d="M4 8a4 4 0 1 0 0-7 4 4 0 0 0 0 7zM4 23a4 4 0 1 0 0-7 4 4 0 0 0 0 7zM19 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4 38a4 4 0 1 0 0-7 4 4 0 0 0 0 7zM19 31a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM34 23a4 4 0 1 0 0-7 4 4 0 0 0 0 7zM4 53a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM19 46a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM34 38a4 4 0 1 0 0-7 4 4 0 0 0 0 7zM49 31a4 4 0 1 0 0-7 4 4 0 0 0 0 7zM4 68a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM19 61a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM34 53a4 4 0 1 0 0-7 4 4 0 0 0 0 7zM49 46a4 4 0 1 0 0-7 4 4 0 0 0 0 7zM63 40a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4 83a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM19 76a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM34 68a4 4 0 1 0 0-7 4 4 0 0 0 0 7zM49 61a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM63 55a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM78 46a4 4 0 1 0 0-7 4 4 0 0 0 0 7zM4 98a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM19 90a4 4 0 1 0 0-7 4 4 0 0 0 0 7zM34 83a4 4 0 1 0 0-7 4 4 0 0 0 0 7zM49 76a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM63 69a4 4 0 1 0 0-7 4 4 0 0 0 0 7zM78 61a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM93 53a4 4 0 1 0 0-7 4 4 0 0 0 0 7zM4 113a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM19 105a4 4 0 1 0 0-7 4 4 0 0 0 0 7zM34 98a4 4 0 1 0 0-7 4 4 0 0 0 0 7zM49 91a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM63 84a4 4 0 1 0 0-7 4 4 0 0 0 0 7zM78 76a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM93 68a4 4 0 1 0 0-7 4 4 0 0 0 0 7zM108 53a4 4 0 1 1 0 8 4 4 0 0 1 0-8z"
            fill="#c60424"
          />
        </svg>

        <svg
          width="495"
          height="491"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="two"
        >
          <path
            d="M321-57S194-26 143 66c-50 92-1 160-25 245C93 397-39 470 12 488c51 17 214-41 309-105 95-65 76-98 134-142 57-43 97-32 97-32l-9-250-222-16z"
            fill="#c60424"
          />
        </svg>

        <svg
          width="237"
          height="237"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="three"
        >
          <path
            d="M237 474A239 239 0 0 1 19 329a236 236 0 0 1 21-225 238 238 0 0 1 429 85 239 239 0 0 1-35 181 238 238 0 0 1-197 104zm0-393c-86 0-156 70-156 156a156 156 0 0 0 313 0c0-86-71-156-157-156z"
            fill="#c60424"
          />
        </svg>
      </ContentRight>
    </Container>
  );
};

export default SignIn;
