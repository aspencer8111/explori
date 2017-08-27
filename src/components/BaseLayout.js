import React, { Component } from 'react'
import '../styles/App.css'

export default class BaseLayout extends Component {
  render() {
    return (
      <div className="flexWrap">
        <div className="App">
          {this.props.children}
        </div>
      </div>
    )
  }
}
