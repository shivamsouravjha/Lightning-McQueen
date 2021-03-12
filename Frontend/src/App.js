import React, { useState, useCallback } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import Initialpage from './common/initial';
import Driverini from './driver/driver_log_sig';
import Riderini from './rider/rider_log_sig';
import Driver from './driver/drivercommand';
import Rider from './rider/ridercommand';
import Rider_login from './rider/riderlogin';
import Rider_Signup from './driver/newdriver';
import Driver_login from './driver/driverlogin';
import Driver_Signup from './driver/newdriver';
import Success from './common/sucess';
import Location from './driver/update_location';
import Avail from './driver/avaiibility';
import End from './rider/end';

const App= ()=> {
  return(
  <Router>
    <Switch>
    <Route path="/initial" exact>
      <Initialpage />
     </Route>
     <Route path="/driverini" exact>
      <Driverini />
     </Route>
     <Route path="/riderini" exact>
      <Riderini />
     </Route>
      
    <Route path="/rider/login" exact>
      <Rider_login />
    </Route>
    <Route path="/rider/signup" exact>
      <Rider_Signup />
    </Route>
    <Route path="/rider/:uid" exact>
      <Rider />
    </Route>

    <Route path="/driver/signup" exact>
      <Driver_Signup />
    </Route>
    <Route path="/driver/login" exact>
      <Driver_login />
    </Route>

    <Route path="/driver/:did" exact>
      <Driver />
    </Route>
    
    <Route path="/driver/:did/availability" exact>
      <Avail />
    </Route>
    <Route path="/driver/:did/update_location" exact>
      <Location />
    </Route>
    <Route path="/driver/:did/history_did" exact>
      <Driver_Signup />
    </Route>
    <Route path="/rider/:uid/end" exact>
      <End />
    </Route>
    <Route path="/rider/:uid/update_location" exact>
      <Location />
    </Route>
    <Route path="/rider/:uid/history_did" exact>
      <Driver_Signup />
    </Route>
    <Route path="/success" exact>
      <Success />
    </Route>
   

    <Redirect to="/initial"/>
    </Switch>
  </Router>
  );
}

export default App;
