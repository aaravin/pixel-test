import React, { Component } from 'react';
import './index.css';

class About extends Component {
  componentDidMount() {
    window.fbq('track', 'InitiateCheckout', {
      content_category: 'test',
      value: 240.00,
      currency: 'USD'
    });
  }

  render() {
    return (
      <div id='content'>About1</div>
    );
  }
}

export default About;
