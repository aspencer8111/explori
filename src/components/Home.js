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
  }

  render() {
    return (
      <div className="home">
        <img src={logo} alt="" id="logo" />
        {/* <h2>Start Customizing Your Cruise</h2> */}
        <h2>Book your excursions.</h2>
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
            <a href="#" id="works">
              HOW IT WORKS
            </a>
            <a href="#" id="privacy">
              PRIVACY POLICY
            </a>
          </div>
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
        {Object.keys(this.state.user).length === 0 ? <Facebook setUser={this.setUser} /> : <Form />}
      </div>
    )
  }
}
