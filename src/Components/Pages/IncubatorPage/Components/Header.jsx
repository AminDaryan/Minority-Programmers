import React from "react";

// Utils
import styled from "styled-components";

// Assets
import { ReactComponent as Earth } from "Assets/Images/earth.svg";
import { ReactComponent as Lamp } from "Assets/Images/lamp.svg";
import { ReactComponent as HumansIcon } from "Assets/Images/humansIcon.svg";

const HeaderContainer = styled.div`
  position: relative;
  height: 30rem;
  background: linear-gradient(
    125deg,
    #ff00b8 2.65%,
    #ff655b 51.83%,
    #ffc700 100%
  );
  overflow: hidden;
`;

const EarthIconContainer = styled.div`
  position: absolute;
  top: 53%;
  left: -3rem;
  transform: translateY(-50%);

  svg {
    height: 34rem;
  }
`;

const LampIconContainer = styled.div`
  position: absolute;
  top: 56%;
  left: 34.5rem;
  transform: translateY(-50%);

  svg {
    height: 34rem;
  }
`;

const HumansIconContainer = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  height: 100%;
`;

const HumansIconSubContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Row = styled.div`
  display: flex;
  align-items: flex-end;
  height: 50%;

  svg {
    height: 13rem;
  }
`;

const Span = styled.span`
  color: white;
  font-size: 5rem;
  font-weight: bold;
`;

const SecondSpan = styled(Span)`
  align-self: flex-start;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <EarthIconContainer>
        <Earth />
      </EarthIconContainer>
      <LampIconContainer>
        <Lamp />
      </LampIconContainer>
      <HumansIconContainer>
        <HumansIconSubContainer>
          <Row>
            <Span>Invest directly</Span>
            <HumansIcon />
          </Row>
          <Row>
            <SecondSpan>into minority innovations.</SecondSpan>
          </Row>
        </HumansIconSubContainer>
      </HumansIconContainer>
    </HeaderContainer>
  );
}
