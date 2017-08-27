import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import BaseLayout from './components/BaseLayout'
import Home from './components/Home'
import About from './components/About'
import Privacy from './components/Privacy'
import Loading from './components/Loading'
import Results2 from './components/Results2'
import Contact from './components/Contact'
import Cruise from './components/Cruise'
import Facebook from './components/Facebook'
import HowItWorks from './components/HowItWorks'
import TechDetails from './components/TechDetails'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

let getCustomExcursions = (email, gender, profile) => {
  let baseUrl = 'https://cors-anywhere.herokuapp.com/http://api.explori.us/api/predictions'
  return fetch(
    `${baseUrl}?email=${email}&gender=${gender}&profile=http://graph.facebook.com/v2.6/${profile}/picture`
  ).then(r => r.json())
}

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <BaseLayout>
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/facebook" component={Facebook} />
        <Route path="/howitworks" component={HowItWorks} />
        <Route path="/techdetails" component={TechDetails} />
        <Route path="/cruise" component={Cruise} />
        <Route path="/loading" component={Loading} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/results" render={() => <Results2 getCustomExcursions={getCustomExcursions} />} />
      </BaseLayout>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
)
registerServiceWorker()
