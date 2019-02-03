import React, { Component } from 'react';
import './LandingPage.css';
import { Link } from "react-router-dom";

class LandingPage extends Component {
  state = {
    name:"",
    email:"",
    body:"",
  };
  handleInputChange = (e) => {
    const val = e.target.value;
    const id = e.target.name;
    const newState = this.state;
    newState[id] = val;
    this.setState({ newState });
  }
  render(){
    return (
      <div id="LandingPage">
        <nav className="landing-nav">
          <ul className="nav-links">
            <li>
              <Link to="/auth/login">
                <h3>Login</h3>
              </Link>
            </li>
            <li>
              <Link to="/auth/signup">
                <h3>Sign Up</h3>
              </Link>
            </li>
          </ul>
        </nav>
        <section id="about">
          <div className="about-background">
            <div>
              <h1 className="landing-header">What is CryptoTracker?</h1>
              <p className="about-text">
                CryptoTracker is a ... Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium dicta exercitationem, asperiores porro ipsa obcaecati doloremque molestias earum, quis alias eligendi ducimus, ab aliquid magni vero ut nulla dolor at?
            </p>
            </div>
            <div>
              <h1 className="landing-header">How to use</h1>
              <ul className="about-text-list">
                <li>
                  Lorem ipsum
                </li>
                <li>
                  dolor sit amet
                </li>
                <li>
                  consectetur adipisicing elit
                </li>
                <li>
                  Accusantium dicta
                </li>
                <li>
                  exercitationem, asperiores porrp
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section id="contact">
          <h1 className="landing-header">Reach out </h1>
          todo:
          <form onSubmit={this.handleLoginSubmit}>
            <div className="form-data">
              <h3>Name / Username</h3>
              <input type="text" name="name" value={this.state.name} onChange={this.handleInputChange} />
            </div>
            <div className="form-data">
              <h3>Email</h3>
              <input type="text" name="email" value={this.state.eamil} onChange={this.handleInputChange} />
            </div>
            <div className="form-data">
              <h3>Body</h3>
              <input type="text" name="body" value={this.state.body} onChange={this.handleInputChange} />
            </div>
            <div className="form-data">
              <input type="submit" />
            </div>
          </form>
        </section>
        You are {this.props.isLoggedIn ? "logged in" : "not logged in"}'
  
      </div>
    );
  }

}

export default LandingPage;
