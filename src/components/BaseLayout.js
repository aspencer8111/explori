import React, { Component } from 'react'
import '../styles/App.css'
import { Link } from 'react-router-dom'

export default class BaseLayout extends Component {
  render() {
    return (
      <div className="flexWrap">
        <div className="App">
          <div className="whiteBox">
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}
