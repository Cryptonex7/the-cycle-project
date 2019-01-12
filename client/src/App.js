import React, { Component } from 'react';
import NavBar from './components/NavBar/NavBar';
import Router from './Router';
import { BrowserRouter } from "react-router-dom";
import Modal from "./components/Modal/Modal";
import Login from './components/Login/Login';
import { connect } from "react-redux";
import './App.css';
import "./palette.css"
import { setPage, toggleModalState, loadUser, fetchAndSetUser } from './actions/actions';
import SignUp from './components/SignUp/SignUp';

const mapStateToProps = state => {
  return {
	page: state.changePage.page,
	isModalOpen: state.toggleModal.isModalOpen,
	user: state.fetchAndSetUser.user,
	isPending: state.fetchAndSetUser.isPending

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

class App extends Component {
	componentDidMount(){
		console.log('mount')
		// this.props.fetchAndSetUser(FETCH_USER);
		
		if(this.props.user.auth !== 'local')
			this.props.fetchAndSetUser();
			// fetch('/api/current_user')
			// 	.then(res => res.json())
			// 	.then(user => {
			// 		this.props.setUserState(user);
			// 	})
	}
	
	modalSwitch = value => {
		switch(value){
			case "login": 
				return(
					<Modal>
						<Login 	setUserState = {this.props.setUserState} 
								toggleModal = {this.props.toggleModal}/>
					</Modal>
				);
			case "signup":
				return(
					<Modal>
						<SignUp setUserState = {this.props.setUserState} 
								toggleModal = {this.props.toggleModal}/>
					</Modal>
				);
			default: return;
		}
	}

	render() {
		return (
			<BrowserRouter>
				<div className="App">
					<NavBar/>
					{
						this.props.isModalOpen !== 'none' &&
						this.modalSwitch(this.props.isModalOpen)
					}
					<Router/>
				</div>
			</BrowserRouter>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
