import React from "react";

// Utils
import styled from "styled-components";

// Components
import LearnButton from "Components/Common/LearnButton";

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0.5rem 0;
  width: 100%;
`;

export default function Buttons() {
  return (
    <ButtonsContainer>
      <LearnButton />
    </ButtonsContainer>
  );
}
