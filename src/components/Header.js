import React from 'react'
import './Header.css';
import Logo from '../image/logo.png';

export default ({black}) => {
    return(
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src={Logo} alt="PatrickFlix Logo" />
                </a>
            </div>
        </header>
    )
}