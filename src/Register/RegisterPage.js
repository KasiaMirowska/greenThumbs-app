import React from 'react';
import RegisterForm from './RegisterForm';
import GreenContext from '../Context';

export default class RegisterPage extends React.Component {
    static contextType = GreenContext;


    handleRegister = () => {
        const {history} =this.props;
        history.push('/login');
    }

    
    render() {
        let error = null;
        if (this.context.error) {
            error = this.context.error.message;
        }
        return (
            <div className='auth'>
                <div id='auth'>
                <h1 >REGISTER </h1>
                <div className='error'>
                    {error}
                </div>
                </div>
                <RegisterForm onRegisterSuccess={this.handleRegister}/>
            </div>
        )
    }
}
