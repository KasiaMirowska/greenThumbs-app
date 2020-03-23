import React from 'react';
import TokenService from '../Services/token-service';
import AuthCalls from '../Services/Auth_Service';
import GreenContext from '../Context';

export default class LoginForm extends React.Component {

   static contextType = GreenContext;
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
        .catch(err => {
            console.log(err)
            this.context.setError(err)
        })
    }

    handleUserNameCleanUp = (e) => {
        e.preventDefault();
        let userName = e.target;
        if(userName.value !== null) {
            userName.value = '';
            this.context.resetError();
        } 
    }

    handlePasswordCleanUp = (e) => {
        e.preventDefault();
        let password = e.target;
        if(password.value !== null) {
           password.value = '';
           this.context.resetError();
        }  
    }
    
    render() {
        return (
            <div>
                <form className='auth-form' onSubmit={this.handleForm}>
                    <input className="form__field form__field3" type='input' id='username' placeholder='username' required onClick={this.handleUserNameCleanUp}/>
                    <br />
                    <input className="form__field form__field3" type='password' id='password' placeholder='password' required onClick={this.handlePasswordCleanUp} />
                    <button type='submit'>Submit</button>
                    <button className='login-button' type="reset" onClick={this.handleAfterErrorDisplay}>
                        Cancel
                    </button>
                </form>
            </div>
        )
    }
}