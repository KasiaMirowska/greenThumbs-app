import React from 'react';
import LoginPage from '../Login/LoginPage';
import Register from '../Register/RegisterForm';
import {Link} from 'react-router-dom';

export default function Nav(props) {
    return (
        <div>
            <Link to={'/login'}>Login</Link>
            <Link to={'/register'}>Register</Link>
        </div>
    )
}