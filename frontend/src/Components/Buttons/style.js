import styled from "styled-components";

export const Button = styled.button`
  font-size: 1rem;
  font-family: "Sarabun", sans-serif;
  cursor: pointer;
  border: none;
  border-radius: 0.4rem;
  background: #2c6aff;
  color: #fff;
  min-width: 8rem;
  padding: 0.8rem 1.2rem;
  box-sizing: border-box;
  transition: 0.1s;

  &:hover,
  &:focus {
    outline: none;
    box-shadow: 0 0 0 0.1875rem #fea, 0 0 0 0.25rem #2c6aff;
  }

  &:disabled {
    opacity: 0.5;
    cursor: wait;
  }
`;
