import React from "react";

// Utils
import styled from "styled-components";
import PropTypes from "prop-types";

const TheBarContainer = styled.div`
  height: 1rem;
  width: 100%;
  background: #e0e0e0;
  border-radius: 25.5px;
`;

const CompletedRatio = styled.div`
  height: 100%;
  width: ${(props) => (props.width <= 1 ? `${props.width * 100}%` : "100%")};
  background: linear-gradient(
    104.61deg,
    #ff00b8 2.65%,
    #ff655b 51.83%,
    #ffc700 100%
  );
  border-radius: 25.5px;
`;

export default function TheBar({ numerator, denominator }) {
  return (
    <TheBarContainer>
      <CompletedRatio width={numerator / denominator} />
    </TheBarContainer>
  );
}

TheBar.propTypes = {
  numerator: PropTypes.number.isRequired,
  denominator: PropTypes.number.isRequired,
};
