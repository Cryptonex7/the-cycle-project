import React from 'react';
import { Link } from "react-router-dom";
import "../Login/Login.css"

class SignUp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            repassword: '',
        }
    }

    onNameChange = (event, key) => {
        this.setState({
                name: event.target.value
        })
    }
    onEmailChange = (event) => {
        this.setState({
                email: event.target.value
        })
    }
    onPasswordChange = (event) => {
        this.setState({
                password: event.target.value
        })
    }
    onRePasswordChange = (event) => {
        this.setState({
                repassword: event.target.value
        })
    }

    onSignUp = () =>{
        console.log(this.state);
        this.props.toggleModal("none");
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
                            Name: <br/>
                            <input type="text"  onChange={this.onNameChange}    placeholder='Enter Name' name="Name" className='inputs' id="name-box"
                            />
                            <br/>
                            Email: <br/>
                            <input type="email"  onChange={this.onEmailChange}   placeholder='Enter Email' name="email" className='inputs' id="email-box"/>
                            <br/>
                            Password: <br/>
                            <input type="password" onChange={this.onPasswordChange} placeholder='Enter Password' name="password" className='inputs' id="password-box"/>
                            <br/>
                            Confirm Password: <br/>
                            <input type="password"  onChange={this.onRePasswordChange}placeholder='Confirm Password' name="re-password" className='inputs' id="re-password-box"/>
                            <br/>
                    
                            <Link exact to='/dashboard' onClick={this.onSignUp} type="button"  className='btn-signup-form button accent'>SignUp</Link>
                            <input type="button"  onClick={() => this.props.toggleModal('none')} className='btn-cancel-form button light-primary' value="Cancel"/>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignUp;