import React from 'react';
import FacebookLogin from 'react-facebook-login';

export default class Facebook extends React.Component {
  responseFacebook(response) {
    this.setUser(response)
    window.user = response
  }

  render() {
    return (
      <FacebookLogin
        appId="113056656037429"
        autoLoad={true}
        redirectUri='http://localhost:3000'
        fields="name,email,picture,gender,about,age_range,cover,location,birthday,sports,relationship_status"
        callback={this.responseFacebook}
        setUser={this.props.setUser}
      />
    )
  }
}
