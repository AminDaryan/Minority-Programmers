import React from "react";

// Utils
import styled from "styled-components";
import PropTypes from "prop-types";

// Components
import Card from "Components/Common/Card/Card";
import Buttons from "./Components/Buttons/Buttons";
import Bar from "./Components/Bar/Bar";

const Image = styled.img`
  height: 7rem;
  max-width: 12rem;
`;

export default function Content({ item }) {
  return (
    <Card>
      <Image src={item.logo} alt="" />
      <Buttons />
      <Bar item={item} />
    </Card>
  );
}

Content.propTypes = {
  item: PropTypes.shape({
    logo: PropTypes.string.isRequired,
    funded: PropTypes.number.isRequired,
    fundNeeded: PropTypes.number.isRequired,  
  }).isRequired,
};
