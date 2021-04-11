import React from "react";
import styled from "styled-components";
import ConnectWalletButton from "./Components/ConnectWalletButton/ConnectWalletButton";
import Logo from "./Components/Logo/Logo";
import Links from "./Components/Links/Links";
import NavigationLinks from "./Components/NavigationLinks/NavigationLinks";
import SearchButtons from "./Components/SearchButton/SearchButton";

const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 9rem;
  background-color: white;
  z-index: 100;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <Logo />
      <Links />
      <ConnectWalletButton />
      <NavigationLinks />
      <SearchButtons />
    </HeaderContainer>
  );
}
