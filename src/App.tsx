import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.scss';
import LandingPage from './containers/LandingPage/LandingPage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/search" component={LandingPage} />
          <Route path="/" exact component={LandingPage} />
          <Route render={() => <h1>Not Found</h1>} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
