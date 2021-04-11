import React from "react";
import { Link, useLocation } from "react-router-dom";

// Utils
import styled from "styled-components";
import PropTypes from "prop-types";

const LearnButtonContainer = styled.button`
  width: 100%;
  background: linear-gradient(161.32deg, #ff00b8 3.86%, #151371 98.64%);
  border: none;
  border-radius: 30px;
  color: white;
  font-size: 1.5rem;
  height: 3.5rem;
`;

const LearnButton = styled.button`
  width: 100%;
  background: transparent;
  border: none;
  border-radius: 30px;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.2s ease-out;

  &:hover {
    font-size: 1.6rem;
  }
`;

export default function TheLearnButton({ item }) {
  const location = useLocation();

  return (
    <LearnButtonContainer>
      <Link
        to={{
          pathname: `${location.pathname}${item.learnButtonLink}`,
          state: { item },
        }}
      >
        <LearnButton>LEARN</LearnButton>
      </Link>
    </LearnButtonContainer>
  );
}

TheLearnButton.propTypes = {
  item: PropTypes.shape({
    learnButtonLink: PropTypes.string.isRequired,
  }).isRequired,
  match: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }).isRequired,
};
