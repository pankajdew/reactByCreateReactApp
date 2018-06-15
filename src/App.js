import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Topics from './Topics';
import logo from './logo.svg';
import './App.css';


class App extends Component {

  constructor({ match }) {
    super()    
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
         {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">          
          <Router>
            <div className="menu">
              <ul>
                <li>
                  <Link to="/">Home | </Link>
                </li>
                <li>
                  <Link to="/about">About | </Link>
                </li>
                <li>
                  <Link to="/topics">Topics</Link>
                </li>
              </ul>

              <hr />

              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/topics" component={Topics} />
            </div>            
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
