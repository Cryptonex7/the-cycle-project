import React from 'react';
import { connect } from "react-redux";
import { loadUser, fetchAndSetUser } from '../../../actions/actions';
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

class HeaderLeft extends React.Component {
  
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
					className=''
					data-lax-preset="lazy driftLeft-200"
				>
                    <div className="title">
                        <div className="level-1">
                            The
                            <span className="red-text"> Cycly App</span>
                            <span className="sub-title"> </span><br/> 
                        </div>
                        <div className="level-2">
                            Beta <span className="accent-text"> </span>
                        </div>
                    </div>
                    <div className="sub-title">
                        <div className="level-3">
                            <br/>
                            The Smart Cylcing Experience<br/>
                        </div>
                        <div className="level-4">
                            <span className="credits primary-text"> by Anujeet Chatterjee (Cryptonex7) & Atharv Upadhyay (atharvu1)</span>
                        </div>
                    </div>    
                    <div className="button-container">
                        {/* <Link exact to = '/login'  activeClassName='active-link' className="btn-login button accent text-primary">LOGIN</Link> */}
                        {/* <Link exact to = '/signup' activeClassName='active-link' className="btn-signup button accent text-primary">SIGN UP</Link> */}
                        <button onClick={() => this.props.toggleModal('login')} className="btn-login space button accent text-primary">Login</button>
                        <button onClick={() => this.props.toggleModal('signup')} className="btn-login space button accent text-primary">Sign Up</button>
                    </div>

				</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderLeft);
