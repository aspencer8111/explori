import React, { Component } from 'react'
import '../styles/App.css'
import { Link } from 'react-router-dom'
import logo from '../imgs/Explorius-Logo.png'
import Facebook from './Facebook'
import Form from './Form'

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {}
    }
  }

  setUser = user => {
    this.setState({ user: user })
    window.user = user
  }

  render() {
    return (
      <div className="homebody">
        <div className="homebox">
          <img src={logo} alt="" className="logo" />
          <h1 className="home-header">Start Booking Your Excursions.</h1>
          <h4>
            LOG IN FOR YOUR <strong>CUSTOMIZED</strong> CRUISE EXPERIENCE.
          </h4>
          <div className="h3Wrapper">
            <div className="facebookText">
              <h3>
                <i className="fa fa-facebook-official" aria-hidden="true" /> FACEBOOK
              </h3>
            </div>
            <div className="cruiseText">
              <h3>
                <i className="fa fa-ticket" aria-hidden="true" /> CRUISE
              </h3>
            </div>
          </div>
          <div className="footerWrapper">
            <div className="footer">
              <Link to="/howitworks" id="works">
                HOW IT WORKS
              </Link>
              <Link to="/privacy" id="privacy">
                PRIVACY POLICY
              </Link>
            </div>
          </div>
          {this.state.user.email === undefined ? <Facebook setUser={this.setUser} /> : <Form />}
        </div>
      </div>
    )
  }
}
