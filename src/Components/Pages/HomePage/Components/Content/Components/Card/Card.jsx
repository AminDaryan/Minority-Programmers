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
      <Image src={item.logo} alt="" />
      <Buttons giveButton={item.giveButton} />
      <Bar item={item} />
    </CardTemplate>
  );
}

Card.propTypes = {
  item: PropTypes.shape({
    logo: PropTypes.string.isRequired,
    funded: PropTypes.number.isRequired,
    fundNeeded: PropTypes.number.isRequired,
    giveButton: PropTypes.bool.isRequired,
  }).isRequired,
};
