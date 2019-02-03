import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

/*Components*/
import LandingPage from "./components/LandingPage/LandingPage.js";
import Home from "./components/Home/Home.js";
import Login from "./components/Auth/Login.js";
import SignUp from "./components/Auth/SignUp.js";
class App extends Component {
  state = {
    isLoggedIn: false,
    token:"",
  }
  componentWillMount() {
    this.hasValidToken();
  }
  hasValidToken = () => {
    const token = localStorage.getItem("token");
    if (token === null || token.length < 10) return false
    return fetch("/auth/validate", {
      method: "POST",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        'Authorization': 'Bearer ' + token
      },
    })
      .then((res) => res.json())
      .then((res) => {
        const newState = this.state;
        if(newState.isLoggedIn===false||newState.token!==token){
          newState.isLoggedIn = res.isValidToken;
          newState.token = token;
          this.setState({ newState });
        }
      })
      .catch((err) => {
        console.error("Error validating token");
      });
  }
  logoutUser = () => {
    localStorage.removeItem("token");
    const newState = this.state;
    newState.isLoggedIn = false;
    this.setState({ newState });
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" render={() => <LandingPage isLoggedIn={this.state.isLoggedIn} />} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/auth/login" component={Login} />
          <Route exact path="/auth/signup" component={SignUp} />
        </div>
      </Router>
    );
  }
}

export default App;
