import React from "react";

// Utils
import styled from "styled-components";

// Components
import Header from "./Components/Header/Header";
import Content from "./Components/Content/Content";
import ButtonsRow from "./Components/ButtonsRow/ButtonsRow";

const ContentContainer = styled.div`
  height: 100%;
  padding: 3rem 0;
`;

export default function IncubationPage() {
  return (
    <ContentContainer>
      <Header />
      <Content />
      <ButtonsRow />
    </ContentContainer>
  );
}
