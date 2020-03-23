import React from 'react';
import LoginForm from './LoginForm';

export default class LoginPage extends React.Component {
    handleLogin = () => {
        const {location, history} = this.props;
        const destination = (location.state || {}).state || '/';
        history.push(destination);
    }

    render() {
        return (
            <div>
                <h1>LOGIN</h1>
                <LoginForm onLoginSuccess={this.handleLogin}/>
            </div>
        )
    };
};