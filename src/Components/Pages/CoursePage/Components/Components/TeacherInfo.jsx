import React from "react";

// Utils
import styled from "styled-components";
import PropTypes from "prop-types";

const TeacherInfoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const TeacherInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 2rem;
  height: 10rem;
  width: 30rem;
  border: 1px #bdbdbd solid;
  box-shadow: 2px 2px 2px #bdbdbd;
  margin-right: 2rem;
`;

const TeacherImg = styled.img`
  height: 8rem;
  width: 8rem;
  border-radius: 50%;
  margin-right: 3rem;
`;

const AboutTeacher = styled.div``;

export default function ContentMain() {
  return (
    <TeacherInfoContainer>
      {[0, 1, 2].map(() => (
        <TeacherInfo>
          <TeacherImg
            src="https://cdn.fastly.picmonkey.com/contentful/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=800&q=70"
            alt=""
          />
          <AboutTeacher>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          </AboutTeacher>
        </TeacherInfo>
      ))}
    </TeacherInfoContainer>
  );
}

ContentMain.propTypes = {
  courseInfo: PropTypes.shape({
    modulesCompleted: PropTypes.number.isRequired,
    allModules: PropTypes.number.isRequired,
    earn: PropTypes.number.isRequired,
  }).isRequired,
};
