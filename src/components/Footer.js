import React, { Component } from 'react';
import '../styles/App.css';
import { Link } from 'react-router-dom'

export default class BaseLayout extends Component {
  render() {
    return (
<footer className="footer">
    <Link to="/privacy">Privacy Policy</Link>
</footer>
)}}
