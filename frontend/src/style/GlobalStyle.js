import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    color: #333;
    --type-first: Helvetica, Arial, sans-serif;
    --type-second: 'Spectral', georgia;
    font-family: 'Sarabun', sans-serif;
  }

  h1, h2, h3, h4, p {
    margin: 0;
  }
  
  ul, li {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  img {
    display: block;
    max-width: 100%;
  }

  button, input {
    display: block;
    font-size: 1rem;
    font-family: 'Sarabun', sans-serif;
    color: #333;
  }

  a {
    text-decoration: none;
    color: #333;
  }

  .App {
     display: flex;
     flex-direction: column;
   }

   .App__body {
     flex: 1;
   }

   .VictoryContainer {
     height: initial !important;
   }
`;

export const Container = styled.div`
  max-width: 50rem;
  padding: 0 1rem;
  margin: 0 auto;
`;
