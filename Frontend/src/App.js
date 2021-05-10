import React, { useState, useCallback } from "react";

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Initialpage from "./common/initial";
import Driverini from "./driver/driver_log_sig";
import Servini from "./service_partner/serviceman_log_sig";
import Driver from "./driver/drivercommand";
import Rider from "./service_partner/ridercommand";
import Service_login from "./service_partner/service_login";
import Service_Signup from "./service_partner/new_service";
import Driver_login from "./driver/driverlogin";
import Driver_Signup from "./driver/newdriver";
import Success from "./common/sucess";
import Location from "./driver/update_location";
import History_Driver from "./driver/history_did";
import Avail from "./driver/avaiibility";
import End from "./service_partner/end";
import History_Rider from "./service_partner/history_uid";
import Avail_cabs from "./service_partner/history_uid Copy";
import Booking from "./service_partner/booking";
import ViewFooter from "./common/ViewFooter";
import MainNavigation from "./common/MainNavigation";
import ScrollToTop from "./scroll";
import RedirectSignup from "./common/redirect";
const App = () => {
  return (
    <Router>
      <ScrollToTop>
        <Switch>
          <Route path="/initial" exact>
            <MainNavigation />
            <Initialpage />
            <ViewFooter />
          </Route>
          <Route path="/driverini" exact>
            <MainNavigation />
            <Driverini />
            <ViewFooter />
          </Route>
          <Route path="/servini" exact>
            <MainNavigation />
            <Servini />
            <ViewFooter />
          </Route>

          <Route path="/serviceman/login" exact>
            <MainNavigation />
            <Service_login />
            <ViewFooter />
          </Route>
          <Route path="/serviceman/signup" exact>
            <MainNavigation />
            <Service_Signup />
            <ViewFooter />
          </Route>
          <Route path="/rider/:uid" exact>
            <MainNavigation />
            <Rider />
            <ViewFooter />
          </Route>

          <Route path="/driver/signup" exact>
            <MainNavigation />
            <Driver_Signup />
            <ViewFooter />
          </Route>
          <Route path="/driver/login" exact>
            <MainNavigation />
            <Driver_login />
            <ViewFooter />
          </Route>

          <Route path="/driver/:did" exact>
            <MainNavigation />
            <Driver />
            <ViewFooter />
          </Route>

          <Route path="/driver/:did/availability" exact>
            <MainNavigation />
            <Avail />
            <ViewFooter />
          </Route>
          <Route path="/driver/:did/update_location" exact>
            <MainNavigation />
            <Location />
            <ViewFooter />
          </Route>
          <Route path="/driver/:did/historydid" exact>
            <MainNavigation />
            <History_Driver />
            <ViewFooter />
          </Route>
          <Route path="/rider/:uid/end" exact>
            <MainNavigation />
            <End />
            <ViewFooter />
          </Route>
          <Route path="/rider/:uid/availcabs" exact>
            <MainNavigation />
            <Avail_cabs />
            <ViewFooter />
          </Route>
          <Route path="/rider/:uid/update_location" exact>
            <MainNavigation />
            <Location />
            <ViewFooter />
          </Route>
          <Route path="/rider/:uid/historyuid" exact>
            <MainNavigation />
            <History_Rider />
            <ViewFooter />
          </Route>
          <Route path="/success" exact>
            <MainNavigation />
            <Success />
            <ViewFooter />
          </Route>
          <Route path="/rider/booking/:uid/:did" exact>
            <MainNavigation />
            <Booking />
            <ViewFooter />
          </Route>
          <Route path="/redirect" exact>
            <MainNavigation />
            <RedirectSignup />
            <ViewFooter />
          </Route>

          <Redirect to="/initial" />
        </Switch>
      </ScrollToTop>
    </Router>
  );
};

export default App;
