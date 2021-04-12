import React from "react";

// Utils
import styled from "styled-components";
import PropTypes from "prop-types";

// Components
import LearnButton from "Components/Common/LearnButton";
import GiveButton from "Components/Common/GiveButton";

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;
  width: 100%;
`;

export default function Buttons({ item }) {
  return (
    <ButtonsContainer>
      <GiveButton giveButtonLink={item?.giveButtonLink} />
      <LearnButton item={item} />
    </ButtonsContainer>
  );
}

Buttons.propTypes = {
  item: PropTypes.shape({
    giveButtonLink: PropTypes.string.isRequired,
  }).isRequired,
};
