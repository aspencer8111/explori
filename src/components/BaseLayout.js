import React, { Component } from 'react';
import '../styles/App.css';
import { Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
      {this.props.children}
      <footer className="footer">
          <Link to="/">Privacy Policy</Link>
        <p className="footer-title">Copyright 2017</p>
      </footer>
      </div>
    );
  }
}

export default App;
