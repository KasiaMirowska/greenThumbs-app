import React from 'react';
import TokenService from '../Services/token-service';
import AuthCalls from '../Services/Auth_Service';


export default class LoginForm extends React.Component {
    state = {
        error: null,
    }

    handleForm =(e)=> {
        e.preventDefault();
        const {username, password} = e.target

        const credentials = {
            username: username.value,
            password: password.value,
        }
        
        AuthCalls.postLogin(credentials)
        .then(res => {
            username.value = '';
            password.value = '';
            TokenService.saveAuthToken(res.authToken);
            this.props.onLoginSuccess();
        })
        .catch(res => {
            this.setState({
                error: res,
            })
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleForm}>
                    <input type='input' id='username' placeholder='username' required/>
                    <input type='password' id='password' placeholder='password' required/>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}