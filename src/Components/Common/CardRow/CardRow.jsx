import React from "react";

// Utils
import styled from "styled-components";
import PropTypes from "prop-types";

const CardRowContainer = styled.div``;

const Header = styled.div`
  color: #3c3b88;
  font-size: 4rem;
  font-weight: bold;
`;

const Row = styled.div`
  display: flex;
  margin: 2rem 0;

  & > div {
    margin-right: 1.5rem;
  }
`;

export default function CardRow({ header, children }) {
  return (
    <CardRowContainer>
      <Header>{header}</Header>
      <Row>{children}</Row>
    </CardRowContainer>
  );
}

CardRow.propTypes = {
  header: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
