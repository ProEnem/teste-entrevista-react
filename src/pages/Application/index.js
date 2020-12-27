import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Moment from "react-moment";
import { Row, Col } from "reactstrap";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import { userActions } from "../../store/actions/user";
import ToastMessage from "../../components/ToastMessage";
import ProfileInfo from "../../components/ProfileInfo";
import noImage from "../../assets/images/no-image.jpg";
import { getUser } from '../../services';
import { getToken } from '../../utils/storage';

import * as S from "./styles";

const Application = () => {
  const history = useHistory();
  const userState = useSelector(({ userReducers }) => userReducers.user);
  const dispatch = useDispatch();

  useEffect(() => {
    getData();    
  }, []);

  const getData = async () => {
    try {
      if (!getToken()) {
        history.push("/");
      } else {
        const { data } = await getUser();
        dispatch(userActions.setUserData(data.name, data.email, data.imageProfile, data.courses));

        history.push("/application");
      }
    } catch (e) {
      toast.error(
        <ToastMessage title="Erro" message={e.response.data.detail} />
      );
      history.push("/");
    }
  };

  const logoff = () => {
    dispatch(userActions.resetUserData())
    localStorage.removeItem("token");
    history.push("/");
  };

  const getSignedCourseList = (list) => {
    return list.map((item) => (
      <tr key={item.id}>
        <td>{item.name}</td>
        <td>
          <Moment format="DD/MM/YYYY">
            {item.schoolPeriod.startDate}
          </Moment>
          {" - "}
          <Moment format="DD/MM/YYYY">
            {item.schoolPeriod.endDate}
          </Moment>
        </td>
      </tr>
    ))
  }

  const showEmptyList = () => (
    <tr>
      <td colSpan="2">Sem matriculas</td>
    </tr>
  )

  return (
    <S.Container className="container">
      <ToastContainer />
      <Row>
        <Col md="12" className="text-center">
          <S.ProfileImage
            className="img-thumbnail mx-auto d-block"
            src={userState.imageProfile || noImage}
            alt="Foto do perfil do usuário"
          />
        </Col>
      </Row>
      <Row>
        <ProfileInfo label="Nome" data={userState.name}  />
        <ProfileInfo label="E-mail" data={userState.email}  />        
        <Col md="12">
          <S.Table>
            <thead>
              <tr>
                <th>Nome da turma</th>
                <th>Período</th>
              </tr>
            </thead>
            <tbody>
              {!!userState.signedCourses.length && getSignedCourseList(userState.signedCourses)}
              {!userState.signedCourses.length && showEmptyList()}
            </tbody>
          </S.Table>
        </Col>
      </Row>
      <Row>
        <Col md="12" className="text-center">
          <S.Button color="danger" onClick={logoff}>
            Sair
          </S.Button>
        </Col>
      </Row>
    </S.Container>
  );
};

export default Application;
