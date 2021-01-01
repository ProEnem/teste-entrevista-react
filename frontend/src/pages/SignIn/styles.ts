import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const ContentLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 700px;

  header h1 {
    margin-bottom: 24px;
    font-size: 32px;
    font-weight: 700;
  }

  header h2 {
    display: flex;
    font-size: 18px;
    font-weight: 400;
    justify-content: center;
  }

  @media (max-width: 768px) {
    header h1 {
      display: flex;
      font-size: 28px;
      justify-content: center;
      margin: 0 10px;
    }

    header h2 {
      text-align: center;
      margin: 0 10px;
    }
  }

  > span {
    margin-top: 30px;
    color: red;
  }

  form {
    margin: 30px 0;
    width: 340px;
    text-align: center;

    & > a {
      display: flex;
      justify-content: flex-end;
      font-size: 12px;
      margin-top: 5px;
      text-decoration: none;
      color: #76b3fe;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.4, '#76b3fe')};
      }
    }
  }

  p {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 16px 0;
    width: 100%;

    &::before {
      background: #dddddd;
      content: '';
      display: block;
      height: 1px;
      width: 88px;
      margin-right: 10px;
    }

    &::after {
      background: #dddddd;
      content: '';
      display: block;
      height: 1px;
      width: 88px;
      margin-left: 10px;
    }
  }

  footer {
    display: flex;
    justify-content: space-between;

    a {
      text-decoration: none;
      font-size: 12px;
      font-weight: 300;
      color: #a3a7b4;
      transition: color 0.2s;

      & + a {
        margin-left: 20px;
      }

      &:hover {
        color: red;
      }
    }
  }
`;

export const ContentRight = styled.div`
  flex: 1;
  background: #df1f3d;
  position: relative;
  width: 50%;
  overflow: hidden;

  img {
    z-index: 3;
    position: absolute;
    right: 5%;
    top: 5%;
    width: 250px;
  }

  .one {
    position: absolute;
    left: 10%;
    top: 30%;
  }

  .two {
    position: absolute;
    right: 0%;
    top: 0%;
  }

  .three {
    position: absolute;
    bottom: 0px;
    right: 0px;
  }
`;

export const ContainerSocial = styled.div`
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: #a3a7b4;
    transition: color 0.2s;

    &:hover {
      color: #4267b2;
    }

    span {
      margin-left: 10px;
    }
  }
`;
