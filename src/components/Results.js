import React, { Component } from 'react'

let url = 'https://cors-anywhere.herokuapp.com/http://www.explori.us/excursions.json'

export default class Results extends Component {
  constructor(props) {
    super(props)
  }
  state = {
    data: []
  }


  componentDidMount() {
    fetch(url).then(res => res.json()).then(data => {
      this.setState({ data })
    })
  }
  render() {
    let exc = this.state.data.slice(0, 3).map(excursion => {
      return (
        <p>{excursion.title}</p>
      )
    })
    return (
      <div>
        <h1>{exc}</h1>
      </div>
    )
  }
}
