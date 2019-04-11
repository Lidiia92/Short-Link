import React from 'react';
import { Link } from 'react-router-dom';
import {Meteor} from 'meteor/meteor';

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        error: ''
    }
  }

    onSubmitHandler = (e) => {
      e.preventDefault();

      const email = this.refs.email.value.trim();
      const password = this.refs.password.value.trim();

      Meteor.loginWithPassword({email}, password, (err) => {
        console.log('Login error', err);
      });

  }

    render() {
      return (
        <div>
            <h1>Login to Short Link</h1>
            <form onSubmit={this.onSubmitHandler}>
                <input type="email" ref="email" name="email" placeholder="Email"/>
                <input type="password" ref="password" name="password" placeholder="Password"/>
                <button>Login</button>
            </form>
            <Link to="/signup">Don't have an account?</Link>
        </div>
      );
    }
  }

export default Login;