import React from 'react';
import { Link } from "react-router-dom";
import "./Login.css";
import Logo from "../../assets/AC-Logo.svg";
import FacebookLogo from "../../assets/facebook.svg"
import GoogleLogo from "../../assets/googleplus.svg"

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

    onGoogleLogin = () =>{
        console.log('google Login init');
        fetch('/auth/google');
        this.props.toggleModal('none');
    }

    render(){
        return(
            <div className="login-container">
                <div className="Login">
                    <img src={Logo} className='login-logo' alt="" width='26%'/>
                    <div className="welcome text-primary">
                        Welcome!
                    </div>
                    <div className="card-bkg form-container">
                        <form action="" className='form'>
                            Email: <br/>
                            <input type="email"     placeholder='Enter Email' name="email" className='inputs' id="email-box"/>
                            <br/>
                            Password: <br/>
                            <input type="password"  placeholder='Enter Password' name="password" className='inputs' id="password-box"/>
                            <br/>
                            <div className="btn-group-local">
                                <Link exact to='/dashboard' onClick={this.onLogin} type="button"  className='btn-signup-form button'>Login</Link>
                                <input type="button"  onClick={() => this.props.toggleModal('none')} className='btn-cancel-form button' value="Cancel"/>
                            </div> <hr/>
                            <span className="or-login-with">Or login with</span>
                            <div className="btn-group-oauth">
                                <a href ='auth/google' onClick={this.onGoogleLogin} className="btn-group btn-google-form button">
                                    <img src={GoogleLogo} alt="" width= '30%'className='icon'/>
                                    <span  className='btn-text '>Google</span>
                                </a>
                                <span className="or">or</span>
                                <a href ='auth/google' onClick={this.onGoogleLogin} className="btn-group btn-facebook-form button">
                                    <img src={FacebookLogo} alt="" width= '28%' className='icon'/>
                                    <span className='btn-text '>Facebook</span>
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;