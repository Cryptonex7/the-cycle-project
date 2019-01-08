import React from 'react';
import "./Header.css"

const Header = ({toggleModal}) => {
    return(
        <div className="text-primary default-primary">
            
            <div className="header">
                <div className="title">
                    Cycly
                </div>
                <div className="sub-title">
                    Earn and Stay Fit!
                </div>
                <div className="button-container">
                    {/* <Link exact to = '/login'  activeClassName='active-link' className="btn-login button accent text-primary">LOGIN</Link> */}
                    {/* <Link exact to = '/signup' activeClassName='active-link' className="btn-signup button accent text-primary">SIGN UP</Link> */}
                    <button onClick={() => toggleModal('login')} className="btn-login button accent text-primary">Login</button>
                    <button onClick={() => toggleModal('signup')} className="btn-login button accent text-primary">Sign Up</button>
                </div>
            </div>
        </div>
    );
}

export default Header;