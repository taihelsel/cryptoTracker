import React, { Component } from 'react';
import './LandingPage.css';

class LandingPage extends Component {
  state={
    loggedIn:false,
  }
  componentWillMount(){
    this.hasValidToken();
  }
  hasValidToken = () => {
    const token = localStorage.getItem("token");
    if(token===null || token.length<10) return false
    return fetch("/auth/validate",{
      method: "POST",
      cache: "no-cache", 
      credentials: "same-origin",
      headers: {
          'Authorization': 'Bearer ' + token
      },
    })
    .then((res)=>res.json())
    .then((res)=>{
      const newState = this.state;
      newState.loggedIn = res.isValidToken;
      this.setState({newState});
    })
    .catch((err)=>{
      console.error("Error validating token");
    });
  }
  isLoggedIn = () => this.state.loggedIn?"logged in":"not logged in";
  render() {
    return (
      <div id="LandingPage">
        You are {this.isLoggedIn()}
      </div>
    );
  }
}

export default LandingPage;
