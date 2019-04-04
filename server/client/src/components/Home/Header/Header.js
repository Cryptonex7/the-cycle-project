import React from 'react';
import "./Header.css"
import  Page  from "../Page/Page";
import HeaderLeft from './HeaderLeft';
import HeaderRight from './HeaderRight';

const Header = ({toggleModal}) => {
    return(
        <div className="text-primary ">
            
            <div className=" grid-4 header">
                <div className="header-grid">

                    <HeaderLeft toggleModal={toggleModal}></HeaderLeft>
                </div>
                <div className="right">
					<HeaderRight></HeaderRight>
                </div>
            </div>


        </div>
    );
}

export default Header;