import React from "react";
import styled from "styled-components";

const ConnectWalletButtonContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Button = styled.button`
  display: inline-block;
  border: none;
  outline: none;
  appearance: none;
  background: red;
  position: relative;
  z-index: 3;
  height: 2rem;
  width: 9.5rem;
  border-radius: 30px;
  font-size: 1rem;
  background: linear-gradient(to right, #ff00b8 0%, #ffc700 100%);

  &:after {
    content: "";
    position: absolute;
    left: 3px;
    right: 3px;
    top: 3px;
    bottom: 3px;
    z-index: -2;
    border-radius: 30px;
    background: white;
    transition: all 0.2s ease-out;
  }

  &:hover {
    cursor: pointer;
    background: linear-gradient(to right, #ff00b8 0%, #ffc700 100%);

    &:after {
      background: linear-gradient(to right, #ff00b8 0%, #ffc700 100%);
    }

    & span {
      background-image: linear-gradient(to right, #fff 0%, #fff 100%);
      font-weight: bold;
    }
  }
`;

const Span = styled.span`
  min-width: 144px;
  z-index: -1;
  font-size: 1.1rem;
  color: #ff00b8;
  background-image: linear-gradient(to right, #ff00b8 0%, #ffc700 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 0.2s ease-out;
`;

export default function ConnectWalletButton() {
  return (
    <ConnectWalletButtonContainer>
      <Button>
        <Span>Connect Wallet</Span>
      </Button>
    </ConnectWalletButtonContainer>
  );
}
