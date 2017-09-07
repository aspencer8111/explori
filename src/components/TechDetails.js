import React, { Component } from 'react'
import fbpic from './Example-Facebook-Photo.jpg'

class TechDetails extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="wrapper">
        <div className="jumbotron">
          <h1>
            <strong>How It Works:</strong> Technically
          </h1>
        </div>
        <section className="step">
          <h2>AI Powered Recommendations</h2>
          <h3>Using Computer Vision and Natural Language Processing</h3>
          <div className="picture-box">
            <img src={fbpic} alt="" />
          </div>
          <div className="content-box">
            <h4>Identified Items:</h4>
            <ol>
              <li>Mountains</li>
              <li>Water</li>
              <li>Hiking Boots</li>
              <li>Trees</li>
            </ol>
            <h4>Related Markers:</h4>
            <ol>
              <li>Sports: Climbing</li>
              <li>Sports: Canoeing and Kayaking</li>
              <li>Hiking Boots</li>
              <li>Trees</li>
            </ol>
            <h4>Recommended Excursions:</h4>
            <ol>
              <li>Kayaking</li>
              <li>Biking</li>
              <li>Helicopter Ride</li>
              <li>Zipline in Forest</li>
            </ol>
          </div>
        </section>
        <section>
          <div className="content-box">
            <p>
              This project was created as part of the 2017 Hospitality Hackathon on the weekend of August 27th, 2017.
              Our team of five people attempted to create a recommendation engine that could be used by cruise ship
              companies to improve the quality of the excursions that are presented to customers. This website is a
              limited demonstration of the core recommendation engine that was created during our three day build time.
            </p>
          </div>
        </section>
        </div>

            )
  }
}

export default TechDetails
