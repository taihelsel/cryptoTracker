import React, { Component } from 'react';
import './Auth.css';

class Login extends Component {
  state = {
    username: "",
    password: "",
  }
  handleLoginSubmit = (e) => {
    e.preventDefault();
    //make api call to login here
    fetch("/auth/login", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrer: "client",
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("login success", res);
      })
      .catch((err) => {
        console.error("error making login request");
      });
  }
  handleInputChange = (e) => {
    const val = e.target.value;
    const id = e.target.name;
    const newState = this.state;
    newState[id] = val;
    this.setState({ newState });
  }
  render() {
    return (
      <section id="Login">
        <h1>Login Page</h1>
        <hr />
        <form onSubmit={this.handleLoginSubmit}>
          <div className="form-data">
            <h3>Username</h3>
            <input type="text" name="username" value={this.state.username} onChange={this.handleInputChange} />
          </div>
          <div className="form-data">
            <h3>Password</h3>
            <input type="password" name="password" value={this.state.password} onChange={this.handleInputChange} />
          </div>
          <div className="form-data">
            <input type="submit" />
          </div>
        </form>
      </section>
    );
  }
}

export default Login;
