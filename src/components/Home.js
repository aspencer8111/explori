import React, { Component } from 'react'
import '../styles/App.css'
import { Link } from 'react-router-dom'
import logo from '../imgs/Explorius-Logo.png'
// import Facebook from './Facebook'

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <img src={logo} alt="" id="logo" />
        {/* <h2>Start Customizing Your Cruise</h2> */}
        <h2>Book your excursions.</h2>
        <h4>
          LOG IN FOR YOUR <strong>CUSTOMIZED</strong> CRUISE EXPERIENCE
        </h4>
        <div className="h3Wrapper">
          <h3>
            <i className="fa fa-facebook-official" aria-hidden="true" />FACEBOOK
          </h3>
          <h3>CRUISE</h3>
        </div>
        <form>
          {/* <Facebook /> */}
          <Link to="/results">
            <div className="submitButton">
              <button className="facebook" type="submit">
                LET'S GO <i className="fa fa-facebook-official" aria-hidden="true" />
              </button>
            </div>
          </Link>
        </form>
      </div>
    )
  }
}
