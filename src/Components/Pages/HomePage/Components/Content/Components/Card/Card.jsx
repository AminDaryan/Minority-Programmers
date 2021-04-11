import React from "react";

// Utils
import styled from "styled-components";
import PropTypes from "prop-types";

// Components
import CardTemplate from "Components/Common/CardTemplate";
import Buttons from "./Components/Buttons";
import Bar from "./Components/Bar";

const Image = styled.img`
  height: 7rem;
  max-width: 12rem;
`;

export default function Card({ item }) {
  return (
    <CardTemplate>
      <Image src={item.projectLogo} alt="" />
      <Buttons giveButtonLink={item.giveButtonLink} />
      <Bar item={item} />
    </CardTemplate>
  );
} 

Card.propTypes = {
  item: PropTypes.shape({
    projectLogo: PropTypes.string.isRequired,
    currentFunding: PropTypes.number.isRequired,
    fundingGoal: PropTypes.number.isRequired,
    giveButtonLink: PropTypes.string.isRequired,
  }).isRequired,
};
