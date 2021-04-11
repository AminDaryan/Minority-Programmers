import React from "react";

// Utils
import styled from "styled-components";
import { Link } from "react-router-dom";

// Assets
import { ReactComponent as MinorityProgrammersLogo } from "Assets/Images/logo.svg";

const LogoContainer = styled.div`
  position: absolute;
  top: 110%;
  left: 3%;
  transform: translateY(-50%);

  svg {
    height: 16rem;
    width: 16rem;
  }
`;

export default function Logo() {
  return (
    <LogoContainer>
      <Link to="/">
        <MinorityProgrammersLogo />
      </Link>
    </LogoContainer>
  );
}
