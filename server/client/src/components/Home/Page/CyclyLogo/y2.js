import React from 'react';
import { connect } from "react-redux";
import { loadUser, fetchAndSetUser } from '../../../../actions/actions';
import ReactDOM from 'react-dom';
import  lax  from "lax.js";


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

class Y2 extends React.Component {
  
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
					className='cycly-logo'
                    data-lax-translate-x= " 0 0, vh 800"
				>
                    <h1>y</h1>
				</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Y2);
