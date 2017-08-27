import React from 'react';
import FacebookLogin from 'react-facebook-login';

export default class Facebook extends React.Component {
  responseFacebook(response) {
    console.log(response)
  }

  render() {
    return (
      <FacebookLogin
        appId="308817092915937"
        autoLoad={true}
        redirectUri='http://localhost:3000'
        fields="name,email,picture"
        callback={this.responseFacebook}
      />
    )
  }
}
