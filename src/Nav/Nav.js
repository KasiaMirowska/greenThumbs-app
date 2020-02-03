import React from 'react';
import Login from '../Login/Login';
import Register from '../Register/Register';
import {Link} from 'react-router-dom';

export default function Nav(props) {
    return (
        <div>
            <Link to={'/login'}>Login</Link>
            <Link to={'/register'}>Register</Link>
        </div>
    )
}