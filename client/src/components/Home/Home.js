import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div id="Home">Hello {this.props.username}</div>
    );
  }
}

export default Home;
