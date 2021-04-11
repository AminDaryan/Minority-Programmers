import React from "react";

// Utils
import styled from "styled-components";
import PropTypes from "prop-types";

const CardContainer = styled.div`
  height: ${(props) => `${props.scale * 21.5}rem`};
  width: ${(props) => `${props.scale * 20.5}rem`};
  background-image: linear-gradient(to right, #ff00b8 0%, #ffc700 100%);
  padding: 4px;
  border-radius: 24%;
  box-sizing: border-box;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: white;
  border-radius: 24%;
  padding: 1rem 2rem;
  box-sizing: border-box;
  overflow: hidden;
`;

export default function CardTemplate({ children, scale }) {
  return (
    <CardContainer scale={scale}>
      <CardContent>{children}</CardContent>
    </CardContainer>
  );
}

CardTemplate.defaultProps = {
  scale: 1,
};

CardTemplate.propTypes = {
  children: PropTypes.node.isRequired,
  scale: PropTypes.number,
};
