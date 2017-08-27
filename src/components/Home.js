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
        {/* <h2>Start Customizing Your Cruise</h2> */}
        <h2>Book your excursions.</h2>
        <h4>
          LOG IN FOR YOUR <strong>CUSTOMIZED</strong> CRUISE EXPERIENCE
        </h4>
        <form>
          <Facebook />
          <Link to="/results">
            <div className="submitButton">
              <input type="submit" value="LET'S GO" />
            </div>
          </Link>
        </form>
      </div>
    )
  }
}
