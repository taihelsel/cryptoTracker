import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

/*Components*/
import LandingPage from "./components/LandingPage/LandingPage.js";
import Home from "./components/Home/Home.js";
import Login from "./components/Auth/Login.js";
import SignUp from "./components/Auth/SignUp.js";
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={LandingPage} isLoggedIn={false}/>
          <Route exact path="/home" component={Home} />
          <Route exact path="/auth/login" component={Login}/>
          <Route exact path="/auth/signup" component={SignUp} />
        </div>
      </Router>
    );
  }
}

export default App;
