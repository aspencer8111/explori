import React, { Component } from 'react'
import {Link} from 'react-router-dom'


export default class Loading extends Component {
  render() {
    return (
      <div>
        We are now loading
        <Link to="/results">Go to Results</Link>
      </div>
    )
  }
}
