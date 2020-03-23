import React from 'react';
import LoginForm from './LoginForm';
import './LoginPage.css';
import GreenContext from '../Context';

export default class LoginPage extends React.Component {
    static contextType = GreenContext;
    
    handleLogin = () => {
        const {location, history} = this.props;
        const destination = (location.state || {}).state || '/';
        history.push(destination);
    }

    handleAfterErrorDisplay = ()=> {
        this.context.resetError()
    }

   
    render() {
        let error = null;
        if (this.context.error) {
            error = this.context.error.message;
        }
        
        return (
            <div className='auth'>
                
                <div id='auth'>
                <h1 >LOGIN </h1>
                <div className='error'>
                    {error}
                </div>
                </div>

                <LoginForm onLoginSuccess={this.handleLogin}/>
            </div>
        )
    };
};