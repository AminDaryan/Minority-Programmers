import React from "react";

// Utils
import styled from "styled-components";
import PropTypes from "prop-types";

const GiveButtonContainer = styled.button`
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
  background: linear-gradient(
    104.61deg,
    #ff00b8 2.65%,
    #ff655b 51.83%,
    #ffc700 100%
  );
  margin-right: 0.5rem;
`;

export default function GiveButton({ giveButtonLink }) {
  return giveButtonLink ? (
    <GiveButtonContainer>GIVE</GiveButtonContainer>
  ) : (
    <div />
  );
}

GiveButton.propTypes = {
  giveButtonLink: PropTypes.string.isRequired,
};
