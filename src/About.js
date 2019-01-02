import React, { Component } from 'react';
import './index.css';

class About extends Component {
  componentDidMount() {
    window.fbq('track', 'Purchase', {
      value: 19.95,
      currency: 'USD',
    });
  }

  render() {
    return (
      <div id='content'>About</div>
    );
  }
}

export default About;
