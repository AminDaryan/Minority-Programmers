import React from "react";

// Utils
import styled from "styled-components";

const LearnButton = styled.button`
  width: 100%;
  background: linear-gradient(161.32deg, #FF00B8 3.86%, #151371 98.64%);
  border: none;
  border-radius: 30px;
  color: white;
  font-size: 1.5rem;
  height: 3.5rem;
  cursor: pointer;
  transition: all 0.2s ease-out;

  &:hover {
    font-size: 1.6rem;
  }
`;

export default function Buttons() {
  return <LearnButton>LEARN</LearnButton>;
}
