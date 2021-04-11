import React from "react";

// Utils
import styled from "styled-components";
import PropTypes from 'prop-types';

const CardContainer = styled.div`
  height: 21rem;
  width: 20rem;
  background-image: linear-gradient(to right, #ff00b8 0%, #ffc700 100%);
  padding: 5px;
  border-radius: 30%;
  overflow: hidden;
`;

const CardContent = styled.div`
  height: 100%;
  background-color: white;
  border-radius: 30%;
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
}
