import React, { Component } from 'react'
import '../styles/App.css'
import logo from '../imgs/Explorius-Logo.png'

export default class BaseLayout extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <div className="nav">
              <a href="/">
                <img src={logo} className="navLogo" alt="Explorius Logo" />
              </a>
          </div>
        </header>
        {this.props.children}
        <div className="footer-main">
          <img src={logo} className="logo" alt="Explorius Logo" />
        </div>
      </div>
    )
  }
}
