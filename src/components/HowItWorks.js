import React, { Component } from 'react'
import '../styles/App.css'
import logo from '../imgs/Explorius-Logo.png'
import facebookLogin from '../imgs/Facebook-Login-Icon.png'
import gears from '../imgs/Analyzing-Icon.png'
import relax from '../imgs/Relax-Icon.png'

class HowItWorks extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="wrapper">
        <div className="jumbotron">
          <h1>
            <strong>How It Works:</strong> The Basics
          </h1>
        </div>
        <div className="how-wrapper">
          <section className="how">
            <img src={facebookLogin} alt="" />
            <div className="how-content-box">
              <h3>Sign in with Facebook</h3>
              <p>
                Before you set sail, log in with Facebook to book your journey and explore all that explorius has to
                offer.
              </p>
            </div>
          </section>
          <section className="how">
            <img src={gears} alt="" />
            <div className="how-content-box">
              <h3>We Create Custom Recommendations</h3>
              <p>
                We analyze many data points to create an unforgettable, stress-free vacation custom made just for you.
              </p>
            </div>
          </section>
          <section className="how">
            <img src={relax} alt="" />
            <div className="how-content-box">
              <h3>Relax & Enjoy Your Trip</h3>
              <p>
                From a well deserved siesta or a spectacular sunset in Bermuda, we transform your vacation to an
                exclusive experience of exceptional quality.
              </p>
            </div>
          </section>
        </div>
        <div className="tech-btn-box">
          <a href="/techdetails">
            <button>Technical Details</button>
          </a>
        </div>
      </div>
    )
  }
}

export default HowItWorks
