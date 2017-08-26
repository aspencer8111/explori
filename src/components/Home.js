import React, { Component } from 'react'
import '../styles/App.css'
import {Link} from 'react-router-dom'

export default class Home extends Component
{
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
      <h1>Logo</h1>
      <form>
        <input type="text" placeholder="Facebook Login" />
        <Link to="/loading">
        <input type="submit" value="Login" />
        </Link>
      </form>
      </div>
    )
  }
}
