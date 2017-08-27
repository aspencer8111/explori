import React, { Component } from 'react'
import fbpic from "./Example-Facebook-Photo.jpg"

class TechDetails extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (

    <div className="wrapper">
      <section className="step">
        <div className="picture-box">
          <img src={fbpic} alt="" />
          </div>
        <div className="content-box">
          <h2>Lorem Ipsum</h2>
          <h3>Distillery occupy viral stumptown</h3>
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
            <li>Excursion One</li>
            <li>Excursion Two</li>
            <li>Excursion Three</li>
            <li>Excursion Four</li>
          </ol>
        </div>
      </section>
      <section className="step">
        <div className="picture-box">
          <img src="http://via.placeholder.com/350x350" />
        </div>
        <div className="content-box">
          <h2>Lorem Ipsum</h2>
          <h3>Distillery occupy viral stumptown</h3>
          <p>Lumbersexual venmo irony asymmetrical try-hard typewriter 90's pok pok tacos cliche schlitz flexitarian, four dollar toast chicharrones iPhone. Keffiyeh schlitz craft beer scenester coloring book vice biodiesel</p>
        </div>
      </section>
      <section className="step">
        <div className="picture-box">
          <img src="http://via.placeholder.com/350x350" />
        </div>
        <div className="content-box">
          <h2>Lorem Ipsum</h2>
          <h3>Distillery occupy viral stumptown</h3>
          <p>Lumbersexual venmo irony asymmetrical try-hard typewriter 90's pok pok tacos cliche schlitz flexitarian, four dollar toast chicharrones iPhone. Keffiyeh schlitz craft beer scenester coloring book vice biodiesel</p>
        </div>
      </section>
      <section className="step">
        <div className="picture-box">
          <img src="http://via.placeholder.com/350x350" />
        </div>
        <div className="content-box">
          <h2>Lorem Ipsum</h2>
          <h3>Distillery occupy viral stumptown</h3>
          <p>Lumbersexual venmo irony asymmetrical try-hard typewriter 90's pok pok tacos cliche schlitz flexitarian, four dollar toast chicharrones iPhone. Keffiyeh schlitz craft beer scenester coloring book vice biodiesel</p>
        </div>
      </section>
    </div>
    )
  }
}

export default TechDetails
