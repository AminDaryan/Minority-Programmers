import React from "react";

// Utils
import styled from "styled-components";

// Components
import Header from "./Components/Header";
import Content from "./Components/Content/Content";

const ContentContainer = styled.div`
  height: 100%;
  padding: 3rem 0;
`;

export default function HomePage() {
  return (
    <ContentContainer>
      <Header />
      <Content />
    </ContentContainer>
  );
}
