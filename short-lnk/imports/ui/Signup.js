import React from 'react';
import {Accounts} from 'meteor/accounts-base';
import { Link } from 'react-router-dom';


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
    
        Accounts.createUser({email: email, password: password}, (err) => {
            console.log('Signup callback', err);
        });
    }


    render() {
      return (
        <div>
            <h1>Signup to Short Link</h1>
            <form onSubmit={this.onSubmitHandler}>
                <input type="email" ref="email" name="email" placeholder="Email"/>
                <input type="password" ref="password" name="password" placeholder="Password"/>
                <button>Create Account</button>
            </form>
            <Link to="/">Have an account?</Link>
        </div>
      );
    }
  }

export default Login;