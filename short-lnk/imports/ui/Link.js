import React from 'react';

class Link extends React.Component {
    onLogout = () => {
        return this.props.history.push('/')
    }
    
    render() {
      return (
        <div>Link Page
            <button onClick={this.onLogout}>Logout</button>
        </div>
      );
    }
  }

export default Link;

