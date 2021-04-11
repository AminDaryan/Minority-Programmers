import React from "react";

// Utils
import styled from "styled-components";

// Components
import CardRow from "Components/Common/CardRow";
import CardTemplate from "Components/Common/CardTemplate";

// Assets
import { ReactComponent as CogWheelGroup } from "Assets/Images/cogWheelGroup.svg";
import windCogwheel from "Assets/Images/windCogwheel.jpg";
import gradientEarth from "Assets/Images/gradientEarth.png";
import { ReactComponent as GradientLamp } from "Assets/Images/gradientLamp.svg";

const categories = [
  {
    title: "Engineering",
    icon: <CogWheelGroup height="15rem" />,
  },
  {
    title: "Science",
    icon: <img src={gradientEarth} style={{ height: "14rem" }} alt="" />,
  },
  {
    title: "Innovation",
    icon: <GradientLamp height="16rem" />,
  },
  {
    title: "Programming",
    icon: <img src={windCogwheel} style={{ height: "10rem" }} alt="" />,
  },
];

const CardContainer = styled.div`
  margin-right: 3.2rem !important;
  cursor: pointer;

  &:hover {
    svg,
    img {
      transform: scale(1.2);
    }

    p {
      transform: translateY(-2rem);
    }
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;

  svg,
  img {
    transition: all 0.2s ease-out;
  }
`;

const Title = styled.p`
  font-size: 3.5rem;
  color: #151371;
  margin: 2rem 0 0;
  transition: all 0.2s ease-out;
`;

export default function CategoriesCards() {
  return (
    <CardRow header="By Category">
      {categories.map((category) => (
        <CardContainer key={category.title}>
          <CardTemplate scale={1.2}>
            <Title>{category.title}</Title>
            <IconContainer>{category.icon}</IconContainer>
          </CardTemplate>
        </CardContainer>
      ))}
    </CardRow>
  );
}
