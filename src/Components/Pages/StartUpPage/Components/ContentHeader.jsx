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

const Logo = styled.img`
  max-height: 20rem;
  max-width: 20rem;
  margin-bottom: 2rem;
`;

const Title = styled.span`
  font-size: 2rem;
  color: #3c3b88;
  font-weight: bold;
`;

export default function ContentHeader({ startUpInfo }) {
  return (
    <HeaderContainer>
      <Logo src={startUpInfo?.projectLogo} alt="" />
      <Title>{startUpInfo?.projectName}</Title>
    </HeaderContainer>
  );
}

ContentHeader.propTypes = {
  startUpInfo: PropTypes.shape({
    projectName: PropTypes.string.isRequired,
    projectLogo: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  }).isRequired,
};
