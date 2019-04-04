import React from 'react';
import { connect } from "react-redux";
import { loadUser, fetchAndSetUser } from '../../actions/actions';

import "./Dashboard.css"

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

class Dashboard extends React.Component {
	componentDidMount(){
		// fetch('/api/current_user')
		// 	.then(res => res.json())
		// 	.then(user => {
		// 		this.props.setUserState(user);
		// 	})
	}
    render() {
        return(
            <div className="Dashboard body-bkgx">
              Dashiiiiinggg!
              <a href="/api/logout" className="button light-primary">Logout</a>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);