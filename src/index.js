import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import BaseLayout from './components/BaseLayout';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Privacy from './components/Privacy';
import Loading from './components/Loading';
import Results from './components/Results';
import Contact from './components/Contact'
import Cruise from './components/Cruise'
import Facebook from './components/Facebook'
import Footer from './components/Footer'
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
  <BaseLayout>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/facebook" component={Facebook} />
      <Route path="/cruise" component={Cruise} />
      <Route path="/loading" component={Loading} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/results" component={Results} />
    </Switch>
  </BaseLayout>
</BrowserRouter>,
document.getElementById('root'));
registerServiceWorker();
