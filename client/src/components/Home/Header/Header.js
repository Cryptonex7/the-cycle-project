import React from 'react';
import "./Header.css"

const Header = () => {
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
                    <button className="login accent text-primary">LOGIN</button>
                    <button className="signup accent text-primary">SIGN UP</button>
                </div>
            </div>
        </div>
    );
}

export default Header;