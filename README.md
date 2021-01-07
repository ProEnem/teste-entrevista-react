<div align="center">
  <img alt="Title image" src="https://i.ibb.co/vL2Ydmk/example4.png">
  
  <div align="center">
    <img alt="Made by Hugo Fortunato" src="https://img.shields.io/badge/madeby-hugofortunato-blue">
    <img alt="MIT license" src="https://img.shields.io/badge/license-MIT-red">
    <img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/figormartins/pokemon">
    <img alt="GitHub stars" src="https://img.shields.io/github/stars/figormartins/pokemon?style=social">
  </div>
</div>


## 💻 Project


This repository is intended to provide user information after login, for example: your name, email and enrolled courses.

Important: Do you want to start the application on your device?
           I installed yarn for this project. You can do the same and after installation, start with 'yarn start'. =]

>

<div align="center">
  <img alt="Title image" src="https://i.ibb.co/Pj1NFBh/landing.png">
  <img alt="Title image" src="https://i.ibb.co/VSn8CkH/example1.png">
  <img alt="Title image" src="https://i.ibb.co/16c4pbz/example2.png">
  <img alt="Title image" src="https://i.ibb.co/prMWR5p/example3.png">
</div>

>

## 🚀 Technologies

This project was developed with the following technologies:

- JavaScript
- React
- CSS
- HTML
- Yup
- Context API
- React String
- React Icons
- Axios
- Styled Components

>

## 👊🏼 Contributing
You are totally allowed to contribute with this project. To do that, fork this repository, make your changes and create a pull request.

> >

<h4 align="center">
    Made by <a href="https://www.linkedin.com/in/hugofor/" style="color: #00a0df" target="_blank">Hugo Fortunato</a>
</h4>










# Teste de React / React Native

O objetivo desse teste é avaliar a qualidade de código e integração com
serviços utilizados pelo ProENEM. O teste é uma avaliação rápida, onde
queremos ver clareza de código, componentização, boas práticas, consumo
de API e persistência.

## Tecnologia

Para resolver esse exercício, utilize:

-   React \>16.7 para vaga Front-End *ou*

-   React Native sem Expo (via react-native-cli) para vaga React Native

-   TypeScript

-   Redux

-   Redux-Saga

## Demanda

-   Consumir uma API do ProENEM para autenticação, onde usamos o padrão Bearer

-   Validar inputs de usuário inválidos (e-mail incorreto, campos vazios) e não permitir submit caso o formulário esteja em formato inválido

-   Enviar um pedido à API, receber o token e realizar algum tipo de persistência dessa informação

-   Consumir uma rota fechada utilizando o token para autorização

-   Permitir o usuário realizar "logoff"

-   Tratar erros que possam ser recebidos em um input incorreto

## API

-   Realizar login

    -   POST https://staging.api.prodigioeducacao.com/v1/token

        -   Rota aberta

        -   Exemplo de body:

            -   { "email": "email@usuario.com", "password": "senhausuario" }

    -   GET https://staging.api.prodigioeducacao.com/v1/person/me)

        -   Rota fechada

        -   Cabeçalho adicional:

            -   Authorization: Bearer \<token-recebido-no-post-de-login\>

            -   X-Brand: proenem

## Usabilidade

A tela de login precisa ter:

-   Um campo para e-mail, com validação de e-mail é obrigatório

-   Um campo para senha, do tipo password é obrigatório

-   Um botão para submit

A tela interna precisa ter:

-   A foto de perfil do usuário

-   Nome do usuário

-   E-mail do usuário

-   Lista de cursos assinados

-   Um botão para logout

## O que será avaliado

###   Para desenvolvedor júnior

    -   Entendimento do pedido

    -   Limpeza de código

    -   Funcionalidade

###   Para desenvolvedor pleno

    -   Entendimento do pedido

    -   Limpeza de código

    -   Funcionalidade

    -   Boas práticas

    -   Interface (UI)

    -   Otimizações/performance

###   Para desenvolvedor sênior

    -   Entendimento do pedido

    -   Limpeza de código

    -   Funcionalidade

    -   Boas práticas

    -   Interface (UI)

    -   Otimizações/performance

    -   Código consistente entre si

    -   Segurança

## Credenciais

Utilize o e-mail jose.couves@proenem.com.br e a senha **12347** para os testes.

## Repositório

Envie um PR para https://github.com/ProEnem/teste-entrevista-react e responda o e-mail quando estiver concluído.
