import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';
import './header.css';

const Header = (): JSX.Element => {
    return (
        <header>
            <h1>App-Bank</h1>
            <nav>
                <AiOutlineMenu className="menu" />
                <ul>
                    <Link to="/Register">
                        <li>Register</li>
                    </Link>
                    <Link to="/Login">
                        <li>Login</li>
                    </Link>
                    <Link to="/About">
                        <li>About</li>
                    </Link>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
