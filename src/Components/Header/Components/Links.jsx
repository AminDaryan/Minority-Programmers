import React from "react";

// Utils
import styled from "styled-components";

// Assets
import { ReactComponent as Twitter } from "Assets/Images/twitter.svg";
import { ReactComponent as Facebook } from "Assets/Images/facebook.svg";
import { ReactComponent as Linkedin } from "Assets/Images/linkedin.svg";
import { ReactComponent as Instagram } from "Assets/Images/instagram.svg";

const LinksContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 20%;
  transform: translateY(-50%);
`;

const Link = styled.a`
  margin: 0 1.5rem;

  svg {
      height: 1.8rem;
  }

  svg path {
    transition: all 0.2s ease-out;
  }

  &:hover svg path {
    fill: #ff00b8;
  }
`;

export default function Links() {
  return (
    <LinksContainer>
      <Link href="https://twitter.com/minorityprogram">
        <Twitter />
      </Link>
      <Link href="https://www.facebook.com/MinorityProgrammers">
        <Facebook />
      </Link>
      <Link href="https://www.linkedin.com/company/minority-programmers">
        <Linkedin />
      </Link>
      <Link href="https://www.instagram.com/minorityprogrammers">
        <Instagram />
      </Link>
    </LinksContainer>
  );
}
