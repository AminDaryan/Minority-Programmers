import React from "react";
import { Link, useLocation } from "react-router-dom";

// Utils
import styled from "styled-components";
import PropTypes from "prop-types";

const LearnButtonContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  background: linear-gradient(161.32deg, #ff00b8 3.86%, #151371 98.64%);
  border-radius: 30px;
  font-size: 1.5rem;
  height: 3.5rem;

  &:hover button {
    font-size: 1.6rem;
  }
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
`;

export default function TheLearnButton({ item }) {
  const location = useLocation();

  return (
    <Link
      to={{
        pathname: `${location.pathname}${item.learnButtonLink}`,
        state: { item },
      }}
      style={{ width: "100%", textDecoration: "none" }}
    >
      <LearnButtonContainer>
        <LearnButton>LEARN</LearnButton>
      </LearnButtonContainer>
    </Link>
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
