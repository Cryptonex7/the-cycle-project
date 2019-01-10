import React from 'react';
import "./Header.css"

const Header = ({toggleModal}) => {
    return(
        <div className="text-primary ">
            
            <div className="header">
                <div className="title">
                    <div className="level-1">
                        Google
                        <span className="red-text">OAuth</span>
                        <span className="sub-title"> &</span><br/> 
                    </div>
                    <div className="level-2">
                        Native <span className="accent-text"> SignUps</span>
                    </div>
                </div>
                <div className="sub-title">
                    <div className="level-3">
                        <br/>
                        Mongo All the Way!!! <br/>
                    </div>
                    <div className="level-4">
                        <span className="credits primary-text"> by Anujeet Chatterjee (Cryptonex7)</span>
                    </div>
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