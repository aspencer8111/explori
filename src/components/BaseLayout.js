import React, { Component } from 'react';
import '../styles/App.css';
import { Link } from 'react-router-dom'

export default class BaseLayout extends Component {
  render() {
    return (
      <div className="App">
      {this.props.children}
      <footer className="footer">
          <Link to="/privacy">Privacy Policy</Link>
        <p className="footer-title">Copyright 2017</p>
      </footer>
      </div>
    );
  }
}
