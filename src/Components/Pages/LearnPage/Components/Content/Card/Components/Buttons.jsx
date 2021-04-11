import React from "react";

// Utils
import styled from "styled-components";
import PropTypes from "prop-types";

// Components
import LearnButton from "Components/Common/LearnButton";

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0.5rem 0;
  width: 100%;
`;

export default function Buttons({ item }) {
  return (
    <ButtonsContainer>
      <LearnButton item={item} />
    </ButtonsContainer>
  );
}

Buttons.propTypes = {
  item: PropTypes.shape({}).isRequired,
};
