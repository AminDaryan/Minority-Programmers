import React from "react";

// Utils
import styled from "styled-components";

// Assets
import { ReactComponent as Earth } from "Assets/Images/earth.svg";
import { ReactComponent as Butterfly } from "Assets/Images/butterfly.svg";
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

const ButterflyIconContainer = styled.div`
  position: absolute;
  top: 42%;
  left: 30rem;
  transform: translateY(-50%);

  svg {
    height: 22rem;
  }
`;

const HumansIconContainer = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  height: 100%;
  margin-top: 2rem;
`;

const HumansIconSubContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Row = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;

  svg {
    height: 13rem;
  }
`;

const Span = styled.span`
  color: white;
  font-size: 4rem;
  font-weight: bold;
  margin-right: 6rem;
`;

const SecondSpan = styled(Span)`
  align-self: flex-start;
`;

const ThirdSpan = styled(Span)`
  position: absolute;
  top: 50%;
  right: 1rem;
  font-size: 2rem;
  font-style: italic;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <EarthIconContainer>
        <Earth />
      </EarthIconContainer>
      <ButterflyIconContainer>
        <Butterfly />
      </ButterflyIconContainer>
      <HumansIconContainer>
        <HumansIconSubContainer>
          <Row>
            <Span>Learn high in</Span>
            <HumansIcon />
          </Row>
          <Row>
            <SecondSpan>Demand IT Skills & get crypto</SecondSpan>
          </Row>
          <Row>
            <ThirdSpan>powered by KoinStreet</ThirdSpan>
          </Row>
        </HumansIconSubContainer>
      </HumansIconContainer>
    </HeaderContainer>
  );
}
