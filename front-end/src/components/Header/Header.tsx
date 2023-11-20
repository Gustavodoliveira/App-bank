import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';
import './header.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { User } from '../../pages/Register/Register';

const Header = (): JSX.Element => {
    const [Active, isActive] = useState(false);
    const user: string = localStorage.getItem('user') || '{}';

    const User: User = JSON.parse(user);
    const logged = localStorage.getItem('logged');

    const Authentication = useSelector((state: RootState) => state.isLoggedin);
    console.log(Authentication);

    return (
        <header>
            <div>
                <h1>App-Bank</h1>
                {User.image && (
                    <img
                        src={`http://localhost:5000/public/${User.image}`}
                        alt="user image"
                        className="image-perfil"
                    />
                )}
            </div>
            <nav>
                <AiOutlineMenu
                    className="menu"
                    onClick={() => (Active ? isActive(false) : isActive(true))}
                />
                <ul className={Active ? 'active' : ''}>
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
