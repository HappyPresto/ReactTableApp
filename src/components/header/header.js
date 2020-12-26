import React from 'react';
import './header.css';

const Header = ({text, showHidden}) => {

    return (
        <div className="header">
            <p className="header__text">{text}</p>
            {showHidden ? (
                <a className='header__arrow' href='#'><span className='header__arrow-el'></span></a>
            ) : ""
            }
        </div>
    )
}

export default Header;