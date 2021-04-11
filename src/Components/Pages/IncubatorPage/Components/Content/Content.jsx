import React from "react";

// Utils
import styled from "styled-components";

// Components
import CardRow from "Components/Common/CardRow/CardRow";
import Card from "Components/Common/Card/Card";

const ContentContainer = styled.div`
  padding: 2rem 5rem;
`;

export default function Content() {
  return (
    <ContentContainer>
      <CardRow header="Featured Startups">
        {[0, 1, 2].map(() => (
          <Card />
        ))}
      </CardRow>
      <CardRow header="Upcoming Startups">
        {[0, 1, 2].map(() => (
          <Card />
        ))}
      </CardRow>
    </ContentContainer>
  );
}
