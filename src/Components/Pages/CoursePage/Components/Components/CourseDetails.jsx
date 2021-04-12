import React from "react";

// Utils
import styled from "styled-components";
import PropTypes from "prop-types";

const CourseDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const CourseInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 2rem 3rem;
  height: 10rem;
  width: 100%;
  border: 1px #bdbdbd solid;
  box-shadow: 2px 2px 2px #bdbdbd;
  margin-bottom: 2rem;
  box-sizing: border-box;
  cursor: pointer;
`;

const Number = styled.span`
  font-size: 3rem;
  color: #bdbdbd;
  width: 5rem;
`;

const AboutSubject = styled.div``;

const Title = styled.p`
  font-size: 1.3rem;
  color: #151371;
  margin-top: 0;
`;

const Text = styled.span``;

export default function ContentMain() {
  return (
    <CourseDetailsContainer>
      {[1, 2, 3].map((item) => (
        <CourseInfo>
          <Number>{item}</Number>
          <AboutSubject>
            <Title>The Subject</Title>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut
            </Text>
          </AboutSubject>
        </CourseInfo>
      ))}
    </CourseDetailsContainer>
  );
}

ContentMain.propTypes = {
  courseInfo: PropTypes.shape({
    modulesCompleted: PropTypes.number.isRequired,
    allModules: PropTypes.number.isRequired,
    earn: PropTypes.number.isRequired,
  }).isRequired,
};
