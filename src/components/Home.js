import React, { Component } from 'react'
import '../styles/App.css'
import { Link } from 'react-router-dom'
import logo from '../imgs/Explorius-Logo.png'
import Facebook from './Facebook'

export default class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="home">
        <img src={logo} alt="" id="logo" />
        <h2>Start Customizing Your Cruise</h2>
        <h4>Log in for your customized cruise experience</h4>
        <form>
          <Facebook />
          <Link to="/results">
            <div className="submitButton">
              <input type="submit" value="Let's Go" />
            </div>
          </Link>
        </form>
      </div>
    )
  }
}
