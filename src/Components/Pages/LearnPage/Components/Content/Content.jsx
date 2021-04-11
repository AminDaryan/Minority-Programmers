import React from "react";

// Utils
import styled from "styled-components";

// Components
import CardRow from "Components/Common/CardRow";
import Card from "./Card/Card";

// SampleData
import { myCourses, featuredCurses } from "./sampleData";
import CategoriesCards from "./Components/CategoriesCards";

const ContentContainer = styled.div`
  padding: 2rem 3rem;
`;

export default function Content() {
  return (
    <ContentContainer>
      <CardRow header="My Courses">
        {myCourses.map((item) => (
          <Card key={`${item.id}`} item={item} />
        ))}
      </CardRow>
      <CardRow header="Featured Courses">
        {featuredCurses.map((item) => (
          <Card key={`${item.id}`} item={item} />
        ))}
      </CardRow>
      <CategoriesCards />
    </ContentContainer>
  );
}
