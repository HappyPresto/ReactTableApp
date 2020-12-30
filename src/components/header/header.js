import React from 'react';
import './header.css';

const Header = ({text, showHidden}) => {

    return (
        <div className="header">
            <p className="header__text">{text}</p>
            {showHidden ? (
                <p className='header__arrow'><span className='header__arrow-el'></span></p>
            ) : ""
            }
        </div>
    )
}

export default Header;