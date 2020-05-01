import React from 'react';

import '../css/header.css';
import logo from '../logo.png';

const Header = () => {
    return (
        <header>
            <div className="wrapper">
                <span className="logo">
                    <a href="javascript:void(0);">
                        <img src={logo} alt="Rishety Indian logo" width="100" />
                    </a>
                </span>
                <nav>
                    <a className="mob_menu"><i class="fas fa-bars"></i></a>
                    <ul>
                        <a className="close"><i class="fas fa-times"></i></a>
                        <li>
                            <a href="javascript:void(0);"><i className="fas fa-user-tie"></i> New Member</a>
                        </li>
                        <li>
                            <a href="javascript:void(0);"><i className="fas fa-sign-in-alt"></i> Login</a>
                        </li>
                        <li>
                            <a href="javascript:void(0);"><i className="fas fa-video"></i> Video</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;