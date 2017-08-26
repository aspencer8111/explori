import React, { Component } from 'react'
import '../styles/App.css'
import { NavLink } from 'react-router-dom'

export default class NavBar extends Component {
  render() {
    return (
<div className="container">
  <nav className="navbar">
            <NavLink activeClassName="selected" className="nav-link" exact to="/">Home</NavLink>
            <NavLink activeClassName="selected" className="nav-link" to="/about">About</NavLink>
            <NavLink activeClassName="selected" className="nav-link" to="/contact">Contact</NavLink>
  </nav>
</div>
) } }
