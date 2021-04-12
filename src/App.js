import React from 'react';
import Home from './Component/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Appoinment from './Component/Appoinment/Appointment/Appoinment';
import DashBoard from './Component/DashBoard/DashBoard/DashBoard';

const App = () => {
  return (
    <div >
      <Router>
        <Switch>
        <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/appointment">
              <Appoinment></Appoinment>
          </Route>
          <Route path="/dashBoard/appointment">
              <DashBoard></DashBoard>
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
};

export default App;
