import React from 'react';
import { connect } from "react-redux";
import { loadUser, fetchAndSetUser } from '../../../actions/actions';
import ReactDOM from 'react-dom';
import  lax  from "lax.js";

import "./Page.css"
import CyclyLogo from './CyclyLogo/CyclyLogo';
import C from './CyclyLogo/C';
import Y from './CyclyLogo/y';
import C2 from './CyclyLogo/c2';
import L from './CyclyLogo/l';
import Y2 from './CyclyLogo/y2';


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

class Page extends React.Component {
  
	componentDidMount() {
		this.el = ReactDOM.findDOMNode(this)
		lax.addElement(this.el)
	}
	
	componentWillUnmount() {
		lax.removeElement(this.el)
	}

	render() {
		return(
				
			<div className='page-container '>
				<C></C>
				<Y></Y>
				<C2></C2>
				<L></L>
				<Y2></Y2>
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);
