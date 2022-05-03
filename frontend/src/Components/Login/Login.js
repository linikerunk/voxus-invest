import React, { useContext } from "react";
import * as S from "./style";

import { Routes, Route, Navigate } from "react-router-dom";

import LoginForm from "./LoginForm";
import LoginCreate from "./LoginCreate";
import LoginPasswordLost from "./LoginPasswordLost";
import LoginPasswordReset from "./LoginPasswordReset";

import LOGO from "../../Assets/LOGO.svg";

const Login = () => {
  return (
    <S.LoginSection>
      <S.Forms>
        <img src={LOGO} alt="logo da empresa" />

        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="criar" element={<LoginCreate />} />
          <Route path="perdeu" element={<LoginPasswordLost />} />
          <Route path="resetar" element={<LoginPasswordReset />} />
        </Routes>
      </S.Forms>
    </S.LoginSection>
  );
};

export default Login;
