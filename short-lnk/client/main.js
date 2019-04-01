import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';

import Signup from '../imports/ui/Signup';
import Link from '../imports/ui/Link';
import './main.html';


Meteor.startup( () => {
  
    ReactDOM.render(<Link />, document.getElementById('app'));
  
});