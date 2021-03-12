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
import Rider_login from './rider/riderlogin';
import Driver_login from './driver/driverlogin';
import Driver_Signup from './driver/newdriver';

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
      <Rider_login />
    </Route>
    <Route path="/rider/signup" exact>
      <Rider />
    </Route>
    <Route path="/driver/signup" exact>
      <Rider />
    </Route>
    <Route path="/driver/login" exact>
      <Driver_login />
    </Route>
    <Route path="/driver/:did" exact>
      <Driver_Signup />
    </Route>
   

    <Redirect to="/initial"/>
    </Switch>
  </Router>
  );
}

export default App;
