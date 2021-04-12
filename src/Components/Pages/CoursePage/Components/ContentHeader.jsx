import React from "react";

// Utils
import styled from "styled-components";
import PropTypes from "prop-types";

// Components

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Title = styled.p`
  font-size: 2rem;
  color: #3c3b88;
  font-weight: bold;
`;

const Description = styled.span`
  font-size: 1.5rem;
  color: #3c3b88;
`;

export default function ContentHeader({ courseInfo }) {
  return (
    <HeaderContainer>
      <Title>{courseInfo?.title}</Title>
      <Description>{courseInfo?.description}</Description>
    </HeaderContainer>
  );
}

ContentHeader.propTypes = {
  courseInfo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};
