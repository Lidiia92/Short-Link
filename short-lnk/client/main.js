import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Signup from '../imports/ui/Signup';
import Login from '../imports/ui/Login';
import Link from '../imports/ui/Link';
import NotFound from '../imports/ui/NotFound';
import './main.html';


const routes = (
  <Router>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route  path="/signup" component={Signup} />
      <Route  path="/links" component={Link} />
      <Route  path="*" component={NotFound} />
    </Switch>
  </Router>
);


Meteor.startup( () => {
  
    ReactDOM.render(routes, document.getElementById('app'));
  
});