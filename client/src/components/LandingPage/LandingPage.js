import React from 'react';
import './LandingPage.css';

const LandingPage = (props) => {
  return (
    <div id="LandingPage">
      You are {props.isLoggedIn ? "logged in" : "not logged in"}
    </div>
  );
}

export default LandingPage;
