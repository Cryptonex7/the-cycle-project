import { connect } from "react-redux";
import React, {Component} from 'react';
import {  } from 'react-router-dom'
import SideButton from './SideButton/SideButton';


import './NavBar.css';
import { setPage, toggleModalState, loadUser, fetchAndSetUser } from '../../actions/actions';


const mapStateToProps = state => {
  return {
	page: state.changePage.page,
	isModalOpen: state.toggleModal.isModalOpen,
	user: state.fetchAndSetUser.user

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
	onPageChange: (page) => dispatch(setPage(page)),
	toggleModal: (isModalOpen) => dispatch(toggleModalState(isModalOpen)),
  setUserState: (user) => dispatch(loadUser(user)),
	fetchAndSetUser: () => dispatch(fetchAndSetUser())
  

  }
}

class NavBar extends Component {
  classToggle = () => {
    // const navs = document.querySelectorAll('.link-container')
    // navs.forEach(nav => nav.classList.toggle('ToggleShow'));
    document.getElementById('flex-container').classList.toggle('ToggleShow')
  }


  rotations =() => {
    let x= document.getElementById("baricon-1");
    x.classList.toggle("rotate-1");
    x.classList.toggle("bar-1");
    
    let y= document.getElementById("baricon-2");
    y.classList.toggle("rotate-2");
    y.classList.toggle("bar-2");
    
    let z= document.getElementById("baricon-3");
    z.classList.toggle("rotate-3");
    z.classList.toggle("bar-3");
    this.classToggle();
  }
  
  render(){
    //const { navPage }  = this.props;
    return(
        <div className="Navbar">
            <div className="Navbar__Link Navbar__Link-brand">
                <div className="page-title">
                    #<span className="gray-text">the</span>Smart<span className="red-text">Login</span><span className="accent-text">Experience</span>
                </div>
            </div>
            <div className="page-title">{this.props.user.name}</div>
            <div className="Navbar__Link Navbar__Link-toggle">
                <SideButton visibilityFunction={this.rotations}/>
            </div>
            <nav className="Navbar__Items Navbar__Items--right" id="flex-container">
                <div className="Navbar__Link">
                    <button  className="linkStyles"    activeClassName="nav-active"  onClick={()=> this.props.toggleModal('login')}    >Login</button>
                </div>
                <div className="Navbar__Link">
                    <button  className="linkStyles"    activeClassName="nav-active"  onClick={()=> this.props.toggleModal('signup')}    >SignUp</button>
                </div>
                
            </nav>
        </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar); 