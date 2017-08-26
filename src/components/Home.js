import React, { Component } from 'react'
import '../styles/App.css'
import {Link} from 'react-router-dom'
import logo from '../imgs/Explorius-Logo.png'

export default class Home extends Component
{
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="home">
      <img src={logo} alt="" id="logo" />
      <h2>Book your excursions</h2>
      <h4>Log in for your customized cruise experience</h4>
      <form>
        <button value="Facebook" />
        <Link to="/loading">
        <input type="submit" value="Let's Go" />
        </Link>
      </form>
      </div>
    )
  }
}
