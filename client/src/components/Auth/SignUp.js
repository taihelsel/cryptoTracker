import React, { Component } from 'react';
import './Auth.css';

class SignUp extends Component {
  state = {
    username: "",
    password: "",
    passwordConf: "",
  }
  handleSignUpSubmit = (e) => {
    e.preventDefault();
    //make api call to signup here
    fetch("/auth/signup",{
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
        username:this.state.username,
        password:this.state.password,
        passwordConf:this.state.passwordConf,
      }),
    })
    .then((res)=>res.json())
    .then((res)=>{
      console.log("signup success",res);
    })
    .catch((err)=>{
      console.error("error making signup request");
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
      <section id="SignUp">
        <h1>Sign Up Page</h1>
        <hr />
        <form onSubmit={this.handleSignUpSubmit}>
          <div className="form-data">
            <h3>Username</h3>
            <input type="text" name="username" value={this.state.username} onChange={this.handleInputChange} />
          </div>
          <div className="form-data">
            <h3>Password</h3>
            <input type="password" name="password" value={this.state.password} onChange={this.handleInputChange} />
          </div>
          <div className="form-data">
            <h3>Confirm Password</h3>
            <input type="password" name="passwordConf" value={this.state.passwordConf} onChange={this.handleInputChange} />
          </div>
          <div className="form-data">
            <input type="submit" />
          </div>
        </form>
      </section>
    );
  }
}

export default SignUp;
