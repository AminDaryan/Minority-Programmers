import React from "react";

// Utils
import styled from "styled-components";
import PropTypes from "prop-types";

const CardContainer = styled.div`
  height: 21rem;
  width: 20rem;
  background-image: linear-gradient(to right, #ff00b8 0%, #ffc700 100%);
  padding: 4px;
  border-radius: 25%;
  box-sizing: border-box;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: white;
  border-radius: 25%;
  padding: 1rem 2rem;
  box-sizing: border-box;
`;

export default function Card({ children }) {
  return (
    <CardContainer>
      <CardContent>{children}</CardContent>
    </CardContainer>
  );
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
};
