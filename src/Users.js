import React, { Component } from 'react';
import './index.css';

class Users extends Component {
  componentDidMount() {
    window.fbq('init', '315044445716656');
    window.fbq('track', 'Purchase', {
      brand: 'Icon',
      value: 3.00
    });
  }

  render() {
    return (
      <div id='content'>Users</div>
    );
  }
}

export default Users;
