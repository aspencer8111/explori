import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../styles/App.css'

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
    if (price_range === 1) {
      return 'Less than $50'
    } else if (price_range === 2) {
      return '$50 to $100'
    } else {
      return 'more than $100'
    }
  }

  parseActivity(activity_level) {
    if (activity_level < 2) {
      return 'Easy'
    } else if (activity_level > 2 && activity_level <= 3) {
      return 'Moderate'
    } else if (activity_level > 3 && activity_level <= 4) {
      return 'Difficult'
    } else {
      return 'Extreme'
    }
  }

  _submit = e => {
    e.preventDefault()
    console.log(e.target.name)
  }

  componentDidMount() {
    const user = window.user
    let data = []
    this.props.getCustomExcursions(user.email, user.gender, user.id)
              .then((json) => {
                data = json;
                console.log(data)
                this.setState({ data })
              })
  }

  render() {
    let exc = this.state.data.slice(0, 3).map(excursion => {
      return (
          <div key={excursion.id}>
            <section className="excursion">
              <div className="excursion-content-box">
                <div className="header-excursion">
                  <h2>{excursion.title}</h2>
                  <h3></h3>
                </div>
                <div className="p-content">
                  <p className="meta"><strong>Category:</strong> {excursion.categories[0]} <strong>Price:</strong> {this.parsePriceRange(excursion.price)} <strong>Activity Level:</strong> {this.parseActivity(excursion.activity_level)} <strong>Duration:</strong>{this.parseDuration(excursion.duration)}</p>
                  <p>{excursion.desc}</p>
                </div>
                <div className="button-box">
                  <button>Book Now</button>
                </div>
              </div>
            </section>
          </div>
      )
    })
    return (
  <div>
    <header>
      <div className="jumbotron">
        <h1>Your <strong>Customized</strong> Excursions</h1>
      </div>
    </header>

    <div className="wrapper">
      {exc}
    </div>
  </div>
    )
  }
}
