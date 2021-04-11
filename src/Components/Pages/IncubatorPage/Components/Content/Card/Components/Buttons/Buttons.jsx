import React from "react";

// Utils
import styled from "styled-components";

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;

  & > button {
    border: none;
    border-radius: 30px;
    color: white;
    font-size: 1.5rem;
    height: 3.5rem;
    width: 8rem;
    cursor: pointer;
    transition: all 0.2s ease-out;

    &:hover {
      font-size: 1.6rem;
    }
  }
`;

const GiveButton = styled.button`
  background: linear-gradient(
    104.61deg,
    #ff00b8 2.65%,
    #ff655b 51.83%,
    #ffc700 100%
  );
  margin-right: 0.5rem;
`;

const LearnButton = styled.button`
  background: linear-gradient(161.32deg, #ff00b8 3.86%, #151371 98.64%);
`;

export default function Buttons() {
  return (
    <ButtonsContainer>
      <GiveButton>GIVE</GiveButton>
      <LearnButton>LEARN</LearnButton>
    </ButtonsContainer>
  );
}
