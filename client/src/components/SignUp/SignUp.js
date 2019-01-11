import React from 'react';
import { Link } from "react-router-dom";
import "../Login/Login.css";
import Logo from "../../assets/AC-Logo.svg";
import FacebookLogo from "../../assets/facebook.svg"
import GoogleLogo from "../../assets/googleplus.svg"
import { connect } from "react-redux";
import { setPage, toggleModalState, loadUser } from '../../actions/actions';


const mapStateToProps = state => {
  return {
	page: state.changePage.page,
	isModalOpen: state.toggleModal.isModalOpen,
	user: state.setUserState.user

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
	onPageChange: (page) => dispatch(setPage(page)),
	toggleModal: (isModalOpen) => dispatch(toggleModalState(isModalOpen)),
	setUserState: (user) => dispatch(loadUser(user))
  }
}

class SignUp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            password: ''
        }

        this.onNameChange = this.onNameChange.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);

    }

    onNameChange(event){
        this.setState({ name: event.target.value });
    }

    
    onEmailChange(event){
        this.setState({ email: event.target.value });
    }
    
    onPasswordChange(event){
        this.setState({ password: event.target.value });
    }
    onLogin = () =>{
        console.log(this.state.user);
        this.props.toggleModal("none");
        this.props.setUserState(this.state);
        console.log( " USER: ", this.state)
    }

    onGoogleLogin = async () =>{
        console.log('google Login init');

        const res = await fetch('/auth/google');
        const user = await res.json();

        Object.assign({}, this.state.user, user)
        this.props.setUserState(this.state);
        console.log(this.state)
        this.props.toggleModal('none');
    }

    render(){
        return(
            <div className="login-container">
                <div className="SignUp">
                    <div className="welcome text-primary">
                        Welcome!
                    </div>
                    <div className="card-bkg form-container">
                        <form action="" className='form form-flex'>
                            <div className="left-col">
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
                                <input type="password"  placeholder='Confirm Password' name="re-password" className='inputs' id="re-password-box"/>
                                <br/>
                                <div className="btn-group-local">
                                    <Link exact to='/dashboard' onClick={this.onLogin} type="button"  className='btn-signup-form button'>Sign Up</Link>
                                    <input type="button"  onClick={() => this.props.toggleModal('none')} className='btn-cancel-form button' value="Cancel"/>
                                </div> 
                            </div>
                            <div className="right-col">
                                <img src={Logo} className='login-logo' alt="" width='40%'/>
                                <span className="or-login-with">Or login with</span> <br/>
                                <a href ='auth/google' onClick={this.onGoogleLogin} className="btn-group btn-group-oauth btn-google-form button">
                                    <img src={GoogleLogo} alt="" width= '30%'className='icon'/>
                                    <span  className='btn-text '>Google</span>
                                </a>
                                <span className="or btn-group-oauth">or</span>
                                <a href ='auth/google' onClick={this.onGoogleLogin} className="btn-group btn-group-oauth btn-facebook-form button">
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

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);;