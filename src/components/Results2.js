import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import loading from '../imgs/loading.gif'
import '../styles/App.css'
import logo from '../imgs/Explorius-Logo.png'

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
  }

  componentDidMount() {
    let user = window.user
    if (user === undefined) {
      window.location = '/'
    }
    let data = []
    this.props.getCustomExcursions(user.email, user.gender, user.id).then(json => {
      data = json
      this.setState({ data })
    })
  }

  render() {
    let exc = this.state.data.slice(0, 3).map(excursion => {
      return (
        <div key={excursion.id}>
          <section className="excursion">
            <div className="excursion-content-box">
              <img
                src={`https://dsc.cloud/AlexSpencerUploads/img${Math.floor(Math.random() * 12) + 1}.jpg`}
                alt=""
                id="excursionPic"
                className="excursionPic"
              />
              <div className="excursion-text">
                <div className="header-excursion">
                  <h3>
                    {excursion.title}
                  </h3>
                </div>
                <div className="p-content">
                  <p className="meta">
                    <strong>Category:</strong> {excursion.categories[0]} <br />
                    <strong>Price:</strong> {this.parsePriceRange(excursion.price)} <br />
                    <strong>Activity Level:</strong>  {this.parseActivity(excursion.activity_level)} <br />
                    <strong>Duration:</strong>
                    {this.parseDuration(excursion.duration)} <br />
                  </p>
                  <p>
                    {excursion.desc}
                  </p>
                </div>
                <br />
                <div className="button-box-book">
                  <button>
                    <a href={'http://www.carnival.com/' + excursion.uri}>Book Now</a>
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      )
    })
    let divvy = (
      <div>
        <div className="wrapper">
          <div className="jumbotron">
            <h1>
              <strong>Customized</strong> Excursions
            </h1>
          </div>

          <div className="notice">👋 Hi! The results you are seeing are from a live ML model that has a very small training set. This was built rapidly and we are experimenting with the model constantly so it may break or return strange results.</div>

          {exc}
        </div>
      </div>
    )
    let loading = <img src={loading} />
    return (
      <div>
        {this.state.data.length === 0
          ? <img
              src="https://dsc.cloud/AlexSpencerUploads/loading.gif"
              alt="loading"
              id="loading"
              className="loading"
            />
          : divvy}
      </div>
    )
  }
}
