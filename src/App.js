import React from 'react';

// Utils
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import Header from 'Components/Header/Header';
import LearnPage from "Components/Pages/LearnPage/LearnPage";
import IncubationPage from "Components/Pages/IncubatorPage/IncubationPage";

const AppContainer = styled.div`
height: 100%;
background: linear-gradient(to right, #ff00b8 0%, #ffc700 100%);
`;

function App() {
  return (
    <AppContainer>
      <Router>
        <Header />
        <Switch>
          <Route path="/incubation" render={() => <IncubationPage />} />
          <Route path="/learn" render={() => <LearnPage />} />
        </Switch>
      </Router>
    </AppContainer>
  );
}

export default App;
