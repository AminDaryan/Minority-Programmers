import React, { useEffect, useState } from "react";

// Utils
import styled from "styled-components";
import PropTypes from "prop-types";

// Components
import ContentHeader from "./Components/ContentHeader";
import Content from "./Components/ContentMain";

const ContentContainer = styled.div`
  height: 100%;
  padding: 3rem 0;
`;

export default function StartUpPage(props) {
  const [courseInfo, setCourseInfo] = useState(null);

  useEffect(() => {
    setCourseInfo(props.location.state.item);
  }, [props]);

  return (
    <ContentContainer>
      <ContentHeader courseInfo={courseInfo} />
      <Content courseInfo={courseInfo} />
    </ContentContainer>
  );
}

StartUpPage.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      item: PropTypes.shape({}).isRequired,
    }).isRequired,
  }).isRequired,
};
