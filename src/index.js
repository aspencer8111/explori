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
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
  <BaseLayout>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/loading" component={Loading} />
      <Route path="/results" component={Results} />
    </Switch>
  </BaseLayout>
</BrowserRouter>,
document.getElementById('root'));
registerServiceWorker();
