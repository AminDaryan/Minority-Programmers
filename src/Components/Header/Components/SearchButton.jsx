import React from "react";

// Utils
import styled from "styled-components";

// Assets
import { ReactComponent as SearchIcon } from "Assets/Images/searchIcon.svg";

const SearchButtonContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 89%;
  transform: translateY(-50%);
`;

const Circle = styled.div`
  position: absolute;
  top: 0;
  left: -0.5rem;
  transform: translateY(-50%);
  border-radius: 50%;
  border: 1px #141471 solid;
  height: 4.8rem;
  width: 4.8rem;
  box-sizing: border-box;
  transition: all 0.3s ease-out;
`;

const SearchButtonIcon = styled.div`
  position: absolute;
  top: 0;
  left: 0rem;
  transform: translateY(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #151371;
  border-radius: 50%;
  height: 4.8rem;
  width: 4.8rem;
  box-sizing: border-box;
  cursor: pointer;

  svg {
    height: 2.3rem;
  }
`;

const SearchButtonSubContainer = styled.div`
  position: relative;

  &:hover ${Circle} {
    left: 0;
  }
`;

export default function SearchButton() {
  return (
    <SearchButtonContainer>
      <SearchButtonSubContainer>
        <Circle />
        <SearchButtonIcon>
          <SearchIcon />
        </SearchButtonIcon>
      </SearchButtonSubContainer>
    </SearchButtonContainer>
  );
}
