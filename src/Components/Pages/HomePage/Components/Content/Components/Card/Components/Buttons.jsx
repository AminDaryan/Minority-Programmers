import React from "react";

// Utils
import styled from "styled-components";
import PropTypes from "prop-types";

// Components
import LearnButton from "Components/Common/LearnButton";

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;
  width: 100%;

  & > button {
    border: none;
    border-radius: 30px;
    color: white;
    font-size: 1.5rem;
    height: 3.5rem;
    width: 100%;
    cursor: pointer;
    transition: all 0.2s ease-out;

    &:hover {
      font-size: 1.6rem;
    }
  }
`;

const GiveButton = styled.button`
  background: linear-gradient(
    104.61deg,
    #ff00b8 2.65%,
    #ff655b 51.83%,
    #ffc700 100%
  );
  margin-right: 0.5rem;
`;

export default function Buttons({ giveButtonLink }) {
  return (
    <ButtonsContainer>
      {giveButtonLink && <GiveButton>GIVE</GiveButton>}
      <LearnButton />
    </ButtonsContainer>
  );
}

Buttons.propTypes = {
  giveButtonLink: PropTypes.string.isRequired,
};
