import React from "react";
import PropTypes from "prop-types";
import * as S from "./styles";

export default function ToastMessage({ title, message }) {
  return (
    <div>
      <S.ToastTitle>{title}</S.ToastTitle>
      <div>{message}</div>
    </div>
  );
}

ToastMessage.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};
