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
`;

const MainContainer = styled.div`
height: 100%;
width: 100%;
padding: 11rem 2% 2%;
box-sizing: border-box;
`;

const Main = styled.div`
height: 100%;
width: 100%;
background-color: white;
border-radius: 67px;
`;

function App() {
  return (
    <AppContainer>
      <Router>
        <Header />
        <MainContainer>
          <Main>
            <Switch>
              <Route path="/incubation" render={() => <IncubationPage />} />
              <Route path="/learn" render={() => <LearnPage />} />
            </Switch>
          </Main>
        </MainContainer>
      </Router>
    </AppContainer>
  );
}

export default App;
