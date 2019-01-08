import React from 'react';
import Header from './Header/Header';
import { connect } from "react-redux";
import { toggleModalState, loadUser } from '../../actions/actions';

import "./Home.css"

const mapStateToProps = state => {
  return {
    isModalOpen: state.toggleModal.isModalOpen,
  	user: state.setUserState.user
    
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
	toggleModal: (isModalOpen) => dispatch(toggleModalState(isModalOpen)),
	setUserState: (user) => dispatch(loadUser(user))

  }
}

class Home extends React.Component {
    render() {
        return(
            <div className="Home body-bkgx">
                <Header toggleModal={this.props.toggleModal}/>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);