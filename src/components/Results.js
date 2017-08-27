import React, { Component } from 'react'
import { Link } from 'react-router-dom'

let url = 'https://cors-anywhere.herokuapp.com/http://www.explori.us/excursions.json'

export default class Results extends Component {
  state = {
    data: []
  }


  _submit = (e) => {
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
          <p>{excursion.title}</p>
          <form>
            <Link to="/info">
            <input type="button" onClick={this._submit} value="Learn More" name={excursion.id} />
            <input type="button" value="Book Now" />
            </Link>
          </form>
      </div>
      )
    })
    return (
      <div>
        <h1>{exc}</h1>
      </div>
    )
  }
}
