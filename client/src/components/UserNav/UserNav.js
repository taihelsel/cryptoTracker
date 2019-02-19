import React from "react";
import "./UserNav.css";
import { Link } from 'react-router-dom';
const UserNav = (props) => (
    <nav className="user-nav">
        <ul className="user-nav-links">
            <li>
                <Link to="/home">Home</Link>
            </li>
            <li>
                <Link to="/wallets">Wallets</Link>
            </li>
            <li>
                <Link to="/notifications">Notifications</Link>
            </li>
            <li>
                <Link to="/settings">Settings</Link>
            </li>
            <li onClick={props.logoutUser}>
                <Link to="/">Logout</Link>
            </li>
        </ul>
    </nav>
);

export default UserNav;