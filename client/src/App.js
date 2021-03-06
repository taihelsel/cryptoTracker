import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

/*Components*/
import LoadingWheel from "./components/LoadingWeel/LoadingWheel.js";
import ProtectedRoute from "./components/RouteProtection/ProtectedRoute.js";
import LandingPage from "./components/LandingPage/LandingPage.js";
import Home from "./components/Home/Home.js";
import Login from "./components/Auth/Login.js";
import SignUp from "./components/Auth/SignUp.js";
class App extends Component {
  state = {
    isLoggedIn: false, //set to true when testing without server
    token: "",
    username: "",
    tokenChecked: false, //set to true when testing without server
  }
  componentWillMount() {
    this.hasValidToken();
  }
  hasValidToken = () => {
    const token = localStorage.getItem("token");
    if (token === null || token.length < 10) {
      const _state = this.state;
      _state.tokenChecked = true;
      this.setState({ _state });
    } else {
      fetch("/auth/validate", {
        method: "POST",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          'Authorization': 'Bearer ' + token
        },
      })
        .then((res) => res.json())
        .then((res) => {
          const _state = this.state;
          if (_state.tokenChecked === false || _state.isLoggedIn === false || _state.token !== token || res.username !== localStorage.getItem("username")) {
            //updating any incorrect data
            localStorage.setItem("username", res.username);
            _state.isLoggedIn = res.isValidToken;
            _state.token = token;
            _state.tokenChecked = true;
            _state.username = res.username;
            this.setState({ _state });
          }
        })
        .catch((err) => {
          console.error("Error validating token");
        });
    }
  }
  logoutUser = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    const _state = this.state;
    _state.username = "";
    _state.token = "";
    _state.isLoggedIn = false;
    this.setState({ _state });
  }
  render() {
    console.log("this.state", this.state);
    return this.state.tokenChecked === true ? (
      <Router>
        <div className="App">
          <Route exact path="/" render={() => <LandingPage isLoggedIn={this.state.isLoggedIn} />} />
          <ProtectedRoute exact path="/home" isLoggedIn={this.state.isLoggedIn} component={() => <Home username={this.state.username} logoutUser={this.logoutUser} />} />
          <Route exact path="/auth/login" component={Login} />
          <Route exact path="/auth/signup" component={SignUp} />
        </div>
      </Router>
    ) : (
        <LoadingWheel />
      );
  }
}

export default App;
