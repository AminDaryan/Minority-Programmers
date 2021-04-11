import React from "react";

// Utils
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavigationLinksContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 60%;
  transform: translateY(-50%);
  display: flex;
`;

const RouterLink = styled.div`
  margin: 0 2.5rem;

  a,
  a:hover,
  a:focus,
  a:active {
    text-decoration: none;
    color: #676565;
    font-size: 1.2rem;
    font-weight: 600;
  }

  a {
    transition: all 0.2s ease-out;
  }

  a:hover {
    color: #ff00b8;
  }
`;

export default function NavigationLinks() {
  return (
    <NavigationLinksContainer>
      <RouterLink>
        <Link to="/">Service</Link>
      </RouterLink>
      <RouterLink>
        <Link to="/">Events</Link>
      </RouterLink>
      <RouterLink>
        <Link to="/learn">Learn</Link>
      </RouterLink>
      <RouterLink>
        <Link to="/">Join</Link>
      </RouterLink>
    </NavigationLinksContainer>
  );
}
