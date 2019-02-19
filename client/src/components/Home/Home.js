import React, { Component } from 'react';
import './Home.css';

//Components
import UserNav from ".././UserNav/UserNav.js";
class Home extends Component {
  render() {
    return (
      <section id="Home">
        <UserNav logoutUser={this.props.logoutUser} />
      </section>
    );
  }
}

export default Home;
