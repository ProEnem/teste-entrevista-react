import React from 'react';
import PropTypes from 'prop-types';
import { Col } from "reactstrap";

import * as S from './styles';

function ProfileInfo({ label, data}) {
  return (
    <Col md="6">
      <S.Label>{label}</S.Label>
      <S.UserData>{data}</S.UserData>
    </Col>
  );
}

ProfileInfo.proptTypes = {
  label: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired
}

export default ProfileInfo;