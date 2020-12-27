import React from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import {
  Card,
  Button,
  CardTitle,
  Row,
  Col,
  Form,
  FormGroup,
  Input,
} from "reactstrap";
import API from "../../api";
import ToastMessage from "../../components/ToastMessage";
import * as S from "./styles";

import { userActions } from "../../store/actions/user";
import { useDispatch, useSelector } from "react-redux";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Email pattern is incorrect")
    .required("Email is required"),
  password: yup.string().required("Password is required"),
});

const Login = () => {
  const history = useHistory();
  const userState = useSelector(({ userReducers }) => userReducers);
  const dispatch = useDispatch();

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async ({ email, password }) => {
    try {
      dispatch(userActions.setLoadingOn());

      const responseToken = await API.post("/token", { email, password });

      localStorage.setItem("token", responseToken.data.token);
      history.push("/application");
      
    } catch (e) {
      toast.error(
        <ToastMessage title="Erro" message={e.response.data.detail} />
      );      
    } finally {
      dispatch(userActions.setLoadingOff());
    }
  };

  return (
    <S.Container>
      <ToastContainer />
      <Row>
        <Col xs={{ size: 12, offset: 0 }}>
          <Card body>
            <CardTitle tag="h5" className="text-center">
              Login
            </CardTitle>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <FormGroup>
                <Input
                  name="email"
                  placeholder="Seu e-mail"
                  innerRef={register}
                  invalid={!!errors.email}
                  disabled={userState.isLoading}
                />
                <S.ErrorMessage>{errors.email?.message}</S.ErrorMessage>
              </FormGroup>
              <FormGroup>
                <Input
                  type="password"
                  name="password"
                  placeholder="Sua senha"
                  innerRef={register}
                  invalid={!!errors.password}
                  disabled={userState.isLoading}
                />
                <S.ErrorMessage>{errors.password?.message}</S.ErrorMessage>
              </FormGroup>
              <Button
                type="submit"
                color="primary"
                block
                disabled={userState.isLoading}
              >
                {userState.isLoading ? "Carregando..." : "Entrar"}
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </S.Container>
  );
};

export default Login;
