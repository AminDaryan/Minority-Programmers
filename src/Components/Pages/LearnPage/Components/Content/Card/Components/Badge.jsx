import React from "react";

// Utils
import styled from "styled-components";
import PropTypes from "prop-types";

const BadgeContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0rem 0.8rem 0 0.5rem;
  background: #9cff83;
  border-radius: 13px;
  margin-bottom: 0.5rem;
  align-self: flex-end;
`;

const Dot = styled.div`
  background: #00d248;
  width: 0.6rem;
  height: 0.6rem;
  border-radius: 50%;
  margin-right: 2.5rem;
`;

const Span = styled.span`
  font-size: 1.1rem;
`;

export default function Content({ earn }) {
  return (
    <BadgeContainer>
      <Dot />
      <Span>Earn ${earn}</Span>
    </BadgeContainer>
  );
}

Content.propTypes = {
  earn: PropTypes.number.isRequired,
};
