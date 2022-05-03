import React, { useContext } from "react";
import * as S from "./style";

import { Link } from "react-router-dom";

import { TOKEN_POST } from "../../services/apiUrl";

import Input from "../Inputs/Inputs";
import Buttons from "../Buttons/Buttons";
import Title from "../Title/Title";
import Head from "../Helper/Head/Head";

import useForm from "../../Hooks/useForm";

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (username.validate() && password.validate()) {
      const { url, options } = TOKEN_POST({
        username: username.value,
        password: password.value,
      });

      const response = await fetch(url, options);
      const json = await response.json();
      localStorage.setItem("token", json.token);
    }
  };

  return (
    <S.Section>
      <Head title="Login" />
      <Title sectionTitle="Login">Login</Title>
      <S.LoginFormStyled onSubmit={handleSubmit}>
        <Input
          label="Usuário"
          name="username"
          type="text"
          value={username}
          {...username}
        />
        <Input
          label="Senha"
          name="password"
          type="password"
          value={password}
          {...password}
        />
        <Buttons type="submit">{"Entrar"}</Buttons>
      </S.LoginFormStyled>
      <S.Register>
        <h2>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>

        <Link to="/login/criar" className="login__register">
          <Buttons type="submit">Cadastro</Buttons>
        </Link>
      </S.Register>
    </S.Section>
  );
};

export default LoginForm;
