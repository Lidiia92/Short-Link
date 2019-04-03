import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
    render() {
      return (
        <div>
            <h1>Signup to Short Link</h1>
            <Link to="/">Have an account?</Link>
        </div>
      );
    }
  }

export default Login;