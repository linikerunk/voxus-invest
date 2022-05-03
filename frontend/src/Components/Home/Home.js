import React from "react";

import Feed from "../Feed/Feed";
import Head from "../Helper/Head/Head";

import { Container } from "../../style/GlobalStyle";

const Home = () => {
  return (
    <Container style={{ marginTop: "2rem" }}>
      <Head title="Fotos" description="Home to voxus investment" />
      <Feed />
    </Container>
  );
};

export default Home;
