import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Home extends Component
{
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
      <Link to='/facebook'>Facebook</Link>
      <Link to='/cruise'>Cruise</Link>
      </div>
    )
  }
}
