import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../styles/App.css'

let url = 'https://cors-anywhere.herokuapp.com/http://www.explori.us/excursions.json'

export default class Results extends Component {
  state = {
    data: []
  }

  parseDuration(duration) {
    if (duration < 2) {
      return 'Less than 2 Hours'
    } else if (duration > 2 && duration <= 3) {
      return '2 to 3 hours'
    } else {
      return '3 to 5 hours'
    }
  }

  parsePriceRange(price_range) {
    if (price_range == 1) {
      return 'Less than $50'
    } else if (price_range == 2) {
      return '$50 to $100'
    } else {
      return 'more than $100'
    }
  }

  _submit = e => {
    e.preventDefault()
    console.log(e.target.name)
  }

  componentDidMount() {
    fetch(url).then(res => res.json()).then(data => {
      this.setState({ data })
    })
  }

  render() {
    let exc = this.state.data.slice(0, 3).map(excursion => {
      return (
        <div>
          <div key={excursion.id}>
            <h3 id="resultsH3">
              {excursion.title}
            </h3>
            {/* <p>
              Activity Level: {excursion.activity_level}
            </p>
            <p>
              Price Range: {this.parsePriceRange(excursion.price_range)}
            </p>
            <p>
              Duration: {this.parseDuration(excursion.duration)}
            </p> */}
            {/* <p>
              {excursion.desc}
            </p> */}
            <form>
              <Link to="/info">
                <input type="button" onClick={this._submit} value="Learn More" name={excursion.id} />
                <input type="button" value="Book Now" />
              </Link>
            </form>
          </div>
        </div>
      )
    })
    return (
      <div className="resultsBox">
        <h1 className="iconClass">ICON HERE</h1>
        {/* <img src={logo} alt="" id="logo" /> */}
        <h2 id="resultsH2">
          Start <strong>Customizing</strong> Your Cruise
        </h2>
        {exc}
      </div>
    )
  }
}
