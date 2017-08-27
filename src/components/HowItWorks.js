import React, { Component } from 'react'
import '../styles/App.css'
import logo from '../imgs/Explorius-Logo.png'

class HowItWorks extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="worksBox">
        <div className="flexWrapperforWorks">
          <img src={logo} alt="" id="logo" />
          <h3 className="h3Works">
            <strong>SIGN IN WITH FACEBOOK</strong>
          </h3>
          <p className="pWorks">
            Before you set sail, log in with Facebook to book your journey and explore all that explorius has to offer.
          </p>
          <h3 className="h3Works">
            <strong>WE CREATE CUSTOM RECOMMENDATIONS FOR YOU</strong>
          </h3>
          <p className="pWorks">
            We analyze many data points to create an unforgettable stress-free vacation custom made just for you.
          </p>
          <h3 className="h3Works">
            <strong>RELAX & ENJOY YOUR BEST VACATION</strong>
          </h3>
          <p className="pWorks">
            We've hand selected the best excursions tailored to every individual traveler. From a well deserved siesta
            or a spectacular sunset in Bermuda, we transform your vacation to an exclusive experience of exceptional
            quality. We create the ultimate backdrop for the vacation of a lifetime.
          </p>
          {/*
          <a href="#" id="technicalDetails">
            TECHNICAL DETAILS
          </a> */}

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
          <div id="techDetailsButton">
            <button
              id="techDetails"
              onClick={this._submit}
              className="facebook"
              type="submit"
              // name={excursion.id}
            >
              TECHNICAL DETAILS
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default HowItWorks
