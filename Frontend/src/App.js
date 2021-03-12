import React, { useState, useCallback } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import Initialpage from './common/initial';
import Driver from './driver/drivercommand';
import Rider from './rider/ridercommand';

const App= ()=> {
  return(
  <Router>
    <Switch>
    <Route path="/initial" exact>
      <Initialpage />
    </Route>
    <Route path="/driver" exact>
      <Driver />
      </Route><Route path="/rider" exact>
      <Rider />
    </Route>
    <Route path="/rider/login" exact>
      <Rider />
    </Route>
    <Route path="/rider/signup" exact>
      <Rider />
    </Route>
    <Route path="/driver/signup" exact>
      <Rider />
    </Route>
    <Route path="/driver/login" exact>
      <Rider />
    </Route>
   

    <Redirect to="/initial"/>
    </Switch>
  </Router>
  );
}

export default App;
