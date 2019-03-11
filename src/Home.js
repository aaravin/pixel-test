import React, { Component } from 'react';
import './index.css';

class Home extends Component {
  componentDidMount() {
    window.fbq('trackCustom', 'Test1', {
      value: 10.00
    });
  }

  render() {
    return (
      <div id='content'>Home</div>
    );
  }
}

export default Home;
