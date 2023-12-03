import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './header.css';
import { RootState } from '../../store';
import { User } from '../../pages/Register/Register';

import { AiOutlineMenu } from 'react-icons/ai';
import { FaSignOutAlt } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../store/modules/auth/AuthReducer';

const Header = (): JSX.Element => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [Active, isActive] = useState(false);
    const user: string = localStorage.getItem('user') || '{}';

    const User: User = JSON.parse(user);
    const logged = localStorage.getItem('logged');

    const Authentication = useSelector((state: RootState) => state.isLoggedin);

    function userLogout() {
        dispatch(logout());
        navigate('/');
    }

    return (
        <header>
            <div>
                <h1>App-Bank</h1>
                {User.image && !Active && (
                    <img
                        src={`http://localhost:5000/public/${User.image}`}
                        alt="user image"
                        className="image-header"
                    />
                )}
            </div>
            <nav>
                <AiOutlineMenu
                    className="menu"
                    onClick={() => (Active ? isActive(false) : isActive(true))}
                />
                <ul className={Active ? 'active' : ''}>
                    {Authentication ? (
                        <>
                            {Active && (
                                <>
                                    <img
                                        src={`http://localhost:5000/public/${User.image}`}
                                        alt={`${User.name}`}
                                        className="image-header centralize"
                                    />
                                    <span>{User.name}</span>
                                </>
                            )}

                            <FaSignOutAlt
                                className="Icon centralize"
                                onClick={userLogout}
                            />
                            <Link to="/About">
                                <li>About</li>
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link to="/register">
                                <li>Register</li>
                            </Link>
                            <Link to="/login">
                                <li>Login</li>
                            </Link>
                            <Link to="/About">
                                <li>About</li>
                            </Link>
                        </>
                    )}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
