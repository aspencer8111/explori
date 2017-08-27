import React, { Component } from 'react'


export default class Info extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
      <h1>{this.props.id}</h1>
      </div>
    )
  }
}
