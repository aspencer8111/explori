import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class Form extends Component {
  render() {
    return (
      <form>
        <Link to="/results">
          <div className="submitButton">
            <button className="facebook" type="submit">
              LET'S GO <i className="fa fa-facebook-official" aria-hidden="true" />
            </button>
          </div>
        </Link>
      </form>
    )
  }
}
