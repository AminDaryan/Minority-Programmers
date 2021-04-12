import React from "react";

// Utils
import styled from "styled-components";
import PropTypes from "prop-types";

// Components
import TheBar from "Components/Common/TheBar";
import TeacherInfo from "./Components/TeacherInfo";
import CourseDetails from "./Components/CourseDetails";

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

const CourseDetailsContainer = styled.div`
  width: 100%;
`;

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

export default function ContentMain({ courseInfo }) {
  const { modulesCompleted, allModules, earn } = courseInfo || {};
  return (
    <ContentContainer>
      <Abstract>
        <Text>{lorem} </Text>
      </Abstract>
      <About>
        <Title>About</Title>
        <Text>{lorem}</Text>
      </About>
      <About>
        <Title>Teachers</Title>
        <TeacherInfo />
      </About>
      <CourseDetailsContainer>
        <Title>Course Details</Title>
        <CourseDetails />
      </CourseDetailsContainer>
      <Goal>
        <Title>Progress</Title>
        <FundingInfo>
          <List>
            <strong>Earn:</strong> ${earn}
          </List>
          <List>
            <strong>Modules Completed:</strong> {modulesCompleted}
          </List>
          <List>
            <strong>All Modules:</strong> {allModules}
          </List>
          <List>
            <strong>Completed Ratio:</strong>{" "}
            {((modulesCompleted / allModules) * 100).toFixed(2)}%
          </List>
        </FundingInfo>
        <TheBar numerator={modulesCompleted} denominator={allModules} />
      </Goal>
    </ContentContainer>
  );
}

ContentMain.propTypes = {
  courseInfo: PropTypes.shape({
    modulesCompleted: PropTypes.number.isRequired,
    allModules: PropTypes.number.isRequired,
    earn: PropTypes.number.isRequired,
  }).isRequired,
};
