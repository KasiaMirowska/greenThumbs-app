import React from 'react';
import AuthCalls from '../Services/Auth_Service';

export default class RegisterForm extends React.Component {
    state = {
        error: null,
    }

    handleForm = (e) => {
        e.preventDefault();
        const {fullname, city, state, username, password} = e.target;

        const newUser = {
            fullname: fullname.value,
            address_city: city.value,
            address_state: state.value,
            username: username.value,
            password: password.value,
        }

        AuthCalls.postNewUser(newUser)
        .then(user => {
            fullname.value = '';
            city.value = '';
            state.value = '';
            username.value =  '';
            password.value = '';
            this.props.onRegisterSuccess()
        })
        .catch(res => {
            console.log(res)
            this.setState({
                error: res,
            })
        })
        

    }
    render() {

    return (
        <div>
            <div>
                <form onSubmit={this.handleForm}>
                    <label htmlFor='fullname'>First and Last Name</label>
                    <input type='input' id='fullname' placeholder='fullname' />
                    <br />
                    <label htmlFor='address'>Address</label>
                    <input type='input' id='city' placeholder='city' />
                    <input type='input' placeholder='state' id='state' />
                    <br />
                    <label htmlFor='login-credentials'>Create your username and password</label>
                    <input type='input' id='username' placeholder='username' />
                    <input type='password' id='password' placeholder='password' />
                    <button type='submit'>Submit</button>
                </form>
            </div>
        </div>
    )
}
}