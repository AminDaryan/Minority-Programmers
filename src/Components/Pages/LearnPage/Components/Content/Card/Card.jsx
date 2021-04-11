import React from "react";

// Utils
import styled from "styled-components";
import PropTypes from "prop-types";

// Components
import CardTemplate from "Components/Common/CardTemplate";
import Buttons from "./Components/Buttons";
import Bar from "./Components/Bar";
import Badge from "./Components/Badge";

const CardContainer = styled.div`
  height: 100%;
  padding: 0 1rem 1rem;
  display: flex;
  flex-direction: column;
`;

const Title = styled.span`
  font-size: 2.8rem;
  font-weight: bold;
  line-height: 36px;
`;

const Description = styled.span`
  font-size: 1rem;
`;

export default function Content({ item }) {
  return (
    <CardTemplate>
      <CardContainer>
        <Badge earn={item.earn} />
        <Title>{item.title}</Title>
        <Description>{item.description}</Description>
        <Buttons item={item} />
        <Bar item={item} />
      </CardContainer>
    </CardTemplate>
  );
}

Content.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    earn: PropTypes.number.isRequired,
  }).isRequired,
};
