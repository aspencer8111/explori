import React, { Component } from 'react'
import Home from './Home'

class App extends Component {
  constructor(){
    super()
    this.getCustomExcursions = this.getCustomExcursions.bind(this)
  }

  // getCustomExcursions(email, gender, profile) {
  //   let baseUrl = 'https://cors-anywhere.herokuapp.com/http://api.explori.us/api/predictions'
  //   fetch(`${baseUrl}?email=${email}&gender=${gender}&profile=` + 'http://graph.facebook.com/v2.6/' + profile + '/picture' + '&foo=bar')
  //     .then(r => r.json())
  //     .then((json) => { console.log(json) })
  // }

  render() {
    return (<Home getCustomExcursions={this.getCustomExcursions}/>)
  }
}

export default App
