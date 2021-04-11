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
      <BarHeader>{`$${item.funded.toLocaleString()}/$${item.fundNeeded.toLocaleString()}`}</BarHeader>
      <TheBar numerator={item.funded} denominator={item.fundNeeded} />
      <BarFooter>
        {Number(
          item.funded / item.fundNeeded <= 1 ? item.funded / item.fundNeeded : 1
        ).toFixed(2) * 100}
        % Funded
      </BarFooter>
    </BarContainer>
  );
}

Bar.propTypes = {
  item: PropTypes.shape({
    funded: PropTypes.number.isRequired,
    fundNeeded: PropTypes.number.isRequired,
  }).isRequired,
};
