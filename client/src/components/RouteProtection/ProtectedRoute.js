import React from 'react'
import { Redirect,Route } from 'react-router-dom';
const ProtectedRoute = ({ component: Component,isLoggedIn:isLoggedIn, ...rest }) => (
    <Route {...rest} render={() => (
        isLoggedIn === true
            ? <Component/>
            : <Redirect to='/' />
    )} />
)
export default ProtectedRoute;