import React from "react";

// Utils
import styled from "styled-components";
import PropTypes from "prop-types";

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

const TheBar = styled.div`
  height: 1rem;
  width: 100%;
  background: #e0e0e0;
  border-radius: 25.5px;
`;

const CompletedRatio = styled.div`
  height: 100%;
  width: ${(props) => (props.width <= 1 ? `${props.width * 100}%` : "100%")};
  background: linear-gradient(
    104.61deg,
    #ff00b8 2.65%,
    #ff655b 51.83%,
    #ffc700 100%
  );
  border-radius: 25.5px;
`;

export default function Bar({ item }) {
  return (
    <BarContainer>
      <BarHeader>{`$${item.funded.toLocaleString()}/$${item.fundNeeded.toLocaleString()}`}</BarHeader>
      <TheBar>
        <CompletedRatio width={item.funded / item.fundNeeded} />
      </TheBar>
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
