import React from 'react';
import { connect } from "react-redux";
import { loadUser, fetchAndSetUser } from '../../../actions/actions';
import ReactDOM from 'react-dom';
import  lax  from "lax.js";

import "./Header.css"

const mapStateToProps = state => {
  return {
	user: state.fetchAndSetUser.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
	setUserState: (user) => dispatch(loadUser(user)),
	fetchAndSetUser: () => dispatch(fetchAndSetUser())
  
  }
}

class HeaderRight extends React.Component {
  
	componentDidMount() {
		this.el = ReactDOM.findDOMNode(this)
		lax.addElement(this.el)
	}
	
	componentWillUnmount() {
		lax.removeElement(this.el)
	}

	render() {
		return(
				
				<div 
					className='bubble accent'
					data-lax-preset=" driftRight zoomOut"
				>

				</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderRight);
