import React from "react";

// Utils
import styled from "styled-components";

// Components
import CardRow from "Components/Common/CardRow";
import Card from "./Components/Card/Card";
import ButtonsRow from "./Components/ButtonsRow";

// SampleData
import { featuredStartUps, upcomingStartUps } from "./sampleData";

const ContentContainer = styled.div`
  padding: 2rem 3rem;
`;

export default function Content() {
  return (
    <ContentContainer>
      <CardRow header="Featured Startups">
        {featuredStartUps.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </CardRow>
      <CardRow header="Upcoming Startups">
        {upcomingStartUps.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </CardRow>
      <ButtonsRow />
    </ContentContainer>
  );
}
