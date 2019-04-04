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

class CyclyLogo extends React.Component {
  
	componentDidMount() {
		this.el = ReactDOM.findDOMNode(this)
		lax.addElement(this.el)
	}
	
	componentWillUnmount() {
		lax.removeElement(this.el)
	}

	render() {
		return(
				<div className="CyclyLogo">
					<div 
						className='cycly-logo'
						data-lax-preset=" eager "
					>
											<h1>C</h1>
					</div>
					<div 
						className='cycly-logo'
						data-lax-preset=" eager "
					>
											<h1>y</h1>
					</div>
					<div 
						className='cycly-logo'
						data-lax-preset=" eager "
					>
											<h1>c</h1>
					</div>
					<div 
						className='cycly-logo'
						data-lax-preset=" eager "
					>
											<h1>l</h1>
					</div>
					<div 
						className='cycly-logo'
						data-lax-preset=" eager "
					>
											<h1>y</h1>
					</div>

				</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CyclyLogo);
