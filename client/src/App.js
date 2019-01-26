import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

/*Components*/
import Home from "./components/Home/Home.js";
class App extends Component {
  componentDidMount() {
    fetch("/test")
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          console.warn("error making test request");
        }
      })
      .then(data => {
        console.log(data);
      });
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Home} />
        </div>
      </Router>
    );
  }
}

export default App;
