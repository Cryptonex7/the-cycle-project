import React from 'react';
import Header from './Header/Header';
import { connect } from "react-redux";
import { toggleModalState, loadUser, fetchAndSetUser } from '../../actions/actions';
import lax from 'lax.js';
import "./Home.css"
import Page from './Page/Page';

const mapStateToProps = state => {
  return {
    isModalOpen: state.toggleModal.isModalOpen,
  	user: state.fetchAndSetUser.user
    
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
	toggleModal: (isModalOpen) => dispatch(toggleModalState(isModalOpen)),
  	setUserState: (user) => dispatch(loadUser(user)),
	fetchAndSetUser: () => dispatch(fetchAndSetUser())
  }
}

class Home extends React.Component {
	constructor(props) {
		super(props)
		lax.setup()
	
		document.addEventListener('scroll', function(x) {
			lax.update(window.scrollY);
			console.log("sctoll");
		}, false)
	
		lax.update(window.scrollY)
	}
	render() {
        return(
            <div className="Home body-bkgx">
                <Header toggleModal={this.props.toggleModal}/>
								<Page></Page>
								<div className="blank"></div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);