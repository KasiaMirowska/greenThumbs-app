import React from 'react';
import RegisterForm from './RegisterForm';

export default class RegisterPage extends React.Component {

    handleRegister = () => {
        const {history} =this.props;
        history.push('/login');
    }

    render() {
        return (
            <div>
                <h2>REGISTER</h2>
                <RegisterForm onRegisterSuccess={this.handleRegister}/>
            </div>
        )
    }
}
