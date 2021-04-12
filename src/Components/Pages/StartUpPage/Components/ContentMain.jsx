import React from "react";

// Utils
import styled from "styled-components";
import PropTypes from "prop-types";

// Components
import TheBar from "Components/Common/TheBar";
import GiveButton from "Components/Common/GiveButton";

const lorem = `  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
minim veniam, quis nostrud exercitation ullamco laboris nisi ut
aliquip ex ea commodo consequat. Duis aute irure dolor in
reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
culpa qui officia deserunt mollit anim id est laborum.
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
minim veniam, quis nostrud exercitation ullamco laboris nisi ut
aliquip ex ea commodo consequat. Duis aute irure dolor in
reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
culpa qui officia deserunt mollit anim id est laborum.
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
minim veniam, quis nostrud exercitation ullamco laboris nisi ut
aliquip ex ea commodo consequat. Duis aute irure dolor in
reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
culpa qui officia deserunt mollit anim id est laborum.`;

const ContentContainer = styled.div`
  height: 100%;
  padding: 1rem 5rem 3rem;

  & > div {
    margin: 2rem 0;
  }
`;

const Abstract = styled.div``;

const About = styled.div``;

const Mission = styled.div``;

const Goal = styled.div``;

const Title = styled.p`
  font-size: 1.7rem;
  color: #3c3b88;
`;

const Text = styled.span``;

const FundingInfo = styled.div`
  margin: 2rem 0;
`;

const List = styled.p`
  strong {
    margin-right: 1rem;
  }
`;

const GiveButtonContainer = styled.div`
  margin-top: 2rem;
`;

export default function ContentMain({ startUpInfo }) {
  const { currentFunding, fundingGoal } = startUpInfo || {};
  return (
    <ContentContainer>
      <Abstract>
        <Text>{lorem} </Text>
      </Abstract>
      <About>
        <Title>About Us</Title>
        <Text>{lorem}</Text>
      </About>
      <Mission>
        <Title>Our Mission</Title>
        <Text>{lorem}</Text>
      </Mission>
      <Goal>
        <Title>Our Goal</Title>
        <Text>{lorem}</Text>
        <FundingInfo>
          <List>
            <strong>Current Funding:</strong> $
            {currentFunding?.toLocaleString()}
          </List>
          <List>
            <strong>Funding Goal:</strong> ${fundingGoal?.toLocaleString()}
          </List>
          <List>
            <strong>Completed Ratio:</strong>{" "}
            {((currentFunding / fundingGoal) * 100).toFixed(2)}%
          </List>
        </FundingInfo>
        <TheBar numerator={currentFunding} denominator={fundingGoal} />
        <GiveButtonContainer>
          <GiveButton giveButtonLink={startUpInfo?.giveButtonLink} />
        </GiveButtonContainer>
      </Goal>
    </ContentContainer>
  );
}

ContentMain.propTypes = {
  startUpInfo: PropTypes.shape({
    projectName: PropTypes.string.isRequired,
    projectLogo: PropTypes.oneOfType([PropTypes.node, PropTypes.string])
      .isRequired,
    currentFunding: PropTypes.number.isRequired,
    fundingGoal: PropTypes.number.isRequired,
    giveButtonLink: PropTypes.string.isRequired,
  }).isRequired,
};
