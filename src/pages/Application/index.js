import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Moment from "react-moment";
import { Row, Col } from "reactstrap";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import { userActions } from "../../store/actions/user";
import ToastMessage from "../../components/ToastMessage";
import ProfileInfo from "../../components/ProfileInfo";
import API from "../../api";

import * as S from "./styles";

const Application = () => {
  const history = useHistory();
  const userState = useSelector(({ userReducers }) => userReducers.user);
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [imageProfile, setImageProfile] = useState("");
  const [signedCourses, setSignedCourses] = useState([]);

  useEffect(() => {
    getUser();    
    setName(userState.name);
    setEmail(userState.email);
    setImageProfile(userState.imageProfile);
    setSignedCourses(userState.signedCourses);
  }, []);

  const getUser = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        history.push("/");
      } else {
        const { data } = await API.get("/person/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        dispatch(
          userActions.setUserData({
            name: data.name,
            email: data.email,
            imageProfile: data.imageProfile,
            signedCourses: data.courses,
          })
        );

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

  return (
    <S.Container className="container">
      <ToastContainer />
      <Row>
        <Col md="12" className="text-center">
          <S.ProfileImage
            className="img-thumbnail mx-auto d-block"
            src={imageProfile}
            alt="Foto do perfil do usuário"
          />
        </Col>
      </Row>
      <Row>
        <ProfileInfo label="Nome" data={name}  />
        <ProfileInfo label="E-mail" data={email}  />        
        <Col md="12">
          <S.Table>
            <thead>
              <tr>
                <th>Nome da turma</th>
                <th>Período</th>
              </tr>
            </thead>
            <tbody>
              {!!signedCourses.length && getSignedCourseList(signedCourses)}
              {!signedCourses.length && (
                <tr>
                  <td colSpan="2">Sem matriculas</td>
                </tr>
              )}
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
