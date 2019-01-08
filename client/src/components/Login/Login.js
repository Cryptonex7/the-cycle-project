import React from 'react';
import { Link } from "react-router-dom";
import "./Login.css"

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            user: {
                name: '',
                email: '',
                password: ''
            }
        }
    }

    onNameChange = (event) => {
        this.setState(prevState => ({
            user: {
                ...prevState.user,
                name: event.target.value
            }
        }))
    }
    onEmailChange = (event) => {
        this.setState(prevState => ({
            user: {
                ...prevState.user,
                email: event.target.value
            }
        }))
    }
    onPasswordChange = (event) => {
        this.setState(prevState => ({
            user: {
                ...prevState.user,
                password: event.target.value
            }
        }))
    }

    onLogin = () =>{
        console.log(this.state.user);
        this.props.toggleModal("none");
        fetch('/dashboard')
            .then(console.log());
    }

    render(){
        return(
            <div className="login-container">
                <div className="Login">
                    <div className="welcome text-primary dark-primary">
                        Welcome to Cycly!
                    </div>
                    <div className="card-bkg form-container">
                        <form action="" className='form'>
                            Email: <br/>
                            <input type="email"     placeholder='Enter Email' name="email" className='inputs' id="email-box"/>
                            <br/>
                            Password: <br/>
                            <input type="password"  placeholder='Enter Password' name="password" className='inputs' id="password-box"/>
                            <br/>
                            <Link exact to='/dashboard' onClick={this.onLogin} type="button"  className='btn-signup-form button accent'>Login</Link>
                            <input type="button"  onClick={() => this.props.toggleModal('none')} className='btn-cancel-form button light-primary' value="Cancel"/>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;