import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Users from './Users';
import './index.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div id='main'>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about/">About</Link>
            <Link to="/users/">Users</Link>
          </nav>
          <div id='content'>
            <Route path="/" exact component={Home} />
            <Route path="/about/" component={About} />
            <Route path="/users/" component={Users} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
