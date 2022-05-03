import styled from "styled-components";

export const TitleStyled = styled.h1`
  font-family: "Sarabun", sans-serif;
  line-height: 1;
  font-size: 3rem;
  margin: 1rem 0;
  position: relative;
  z-index: 1;

  &::after {
    content: "";
    display: block;
    width: 1.5rem;
    height: 1.5rem;
    background: #2c6aff;
    position: absolute;
    bottom: 0.3125rem;
    left: -0.3125rem;
    border-radius: 0.2rem;
    z-index: -1;
  }
`;
