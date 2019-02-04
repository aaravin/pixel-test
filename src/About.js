import React, { Component } from 'react';
import './index.css';

class About extends Component {
  componentDidMount() {
    window.fbq('track', 'InitiateCheckout', {
      content_category: [{name: 'weekday_style', value: 'Business Formal'}],
      value: 240.00,
      currency: 'USD'
    });
  }

  render() {
    return (
      <div id='content'>About</div>
    );
  }
}

export default About;
