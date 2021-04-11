import React from "react";

// Utils
import styled from "styled-components";

// Components
import CardRow from "Components/Common/CardRow/CardRow";
import Card from "./Card/Card";

// SampleData
import { featuredStartUps, upcomingStartUps } from "./sampleData";

const ContentContainer = styled.div`
  padding: 2rem 4rem;
`;

export default function Content() {
  return (
    <ContentContainer>
      <CardRow header="Featured Startups">
        {featuredStartUps.map((item) => (
            <Card item={item} />
        ))}
      </CardRow>
      <CardRow header="Upcoming Startups">
        {upcomingStartUps.map((item) => (
            <Card item={item} />
        ))}
      </CardRow>
    </ContentContainer>
  );
}
