import React from 'react';
import Header from './Header/Header';

import "./Home.css"

class Home extends React.Component {
    render() {
        return(
            <div className="Home">
                <Header/>
            </div>
        );
    }
}

export default Home;