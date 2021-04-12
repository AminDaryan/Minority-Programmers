import React from "react";

// Utils
import styled from "styled-components";

const ButtonsRowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 3rem 0 0;
`;

const Button = styled.button`
  background: linear-gradient(
    104.61deg,
    #ff00b8 2.65%,
    #ff655b 51.83%,
    #ffc700 100%
  );
  border-radius: 30px;
  border: none;
  color: white;
  height: 9rem;
  width: 32.5%;
  font-size: 3rem;
  padding: 0rem 4rem;
  transition:all 0.2s  ease-out;
  cursor: pointer;

  &:hover{
    font-size: 3.2rem;
  }
`;

export default function ButtonsRow() {
  return (
    <ButtonsRowContainer>
      <Button>Advise A Startup</Button>
      <Button>Join Minority Ventures Cohort</Button>
      <Button>Help {`<Code/>`}</Button>
    </ButtonsRowContainer>
  );
}
