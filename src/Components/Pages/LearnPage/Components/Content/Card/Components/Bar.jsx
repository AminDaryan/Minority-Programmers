import React from "react";

// Utils
import styled from "styled-components";
import PropTypes from "prop-types";

// Components
import TheBar from "Components/Common/TheBar";

const BarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
`;

const BarHeader = styled.span`
  font-size: 1.7rem;
`;

const BarFooter = styled.span`
  font-size: 1.1rem;
`;

export default function Bar({ item }) {
  return (
    <BarContainer>
      <BarHeader>{`${item.modulesCompleted.toLocaleString()}/${item.allModules.toLocaleString()} Modules`}</BarHeader>
      <TheBar numerator={item.modulesCompleted} denominator={item.allModules} />
      <BarFooter>
        {Number(
          item.modulesCompleted / item.allModules <= 1
            ? item.modulesCompleted / item.allModules
            : 1
        ) * 100}
        % Completed
      </BarFooter>
    </BarContainer>
  );
}

Bar.propTypes = {
  item: PropTypes.shape({
    modulesCompleted: PropTypes.number.isRequired,
    allModules: PropTypes.number.isRequired,
  }).isRequired,
};
