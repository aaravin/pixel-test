import React, { Component } from 'react';
import './index.css';

class Users extends Component {
  componentDidMount() {
    window.fbq('trackCustom', 'Test1', {
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
