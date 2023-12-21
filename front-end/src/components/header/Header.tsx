'use client';

import React, { useEffect, useState } from 'react';
import { Container, NavContainer } from './header';
import Link from 'next/link';

import { AiOutlineMenu, AiOutlineLogout } from 'react-icons/ai';
import store from '@/store/store';
import { logout } from '@/store/auth/auth';
import { useRouter } from 'next/navigation';
import { destroyCookie, parseCookies } from 'nookies';

const Header = () => {
  const [Active, isActive] = useState(false);
  const [UserAuth, setUserAuth] = useState<boolean>(false);
  const navigate = useRouter();

  useEffect(() => {
    const { token } = parseCookies();
    if (!token) return;
    setUserAuth(store.getState().isLogged);
  }, []);

  return (
    <Container>
      <h1>App-bank</h1>
      <NavContainer>
        <AiOutlineMenu
          className="menu"
          onClick={() => (Active ? isActive(false) : isActive(true))}
        />

        <ul className={Active ? 'active' : ''}>
          {UserAuth ? (
            <li>Transfer</li>
          ) : (
            <>
              <li
                className="after-border-bottom"
                onClick={() => (Active ? isActive(false) : isActive(true))}
              >
                <Link href="/register">Register</Link>
              </li>

              <li
                className="after-border-bottom"
                onClick={() => (Active ? isActive(false) : isActive(true))}
              >
                <Link href="/login">Login</Link>
              </li>
            </>
          )}
          <li
            className="after-border-bottom"
            onClick={() => (Active ? isActive(false) : isActive(true))}
          >
            <Link href="/about">About</Link>
          </li>
        </ul>
        {UserAuth && (
          <AiOutlineLogout
            className="icon icon-logout"
            onClick={() => {
              store.dispatch(logout(false));
              destroyCookie(undefined, 'token');
              navigate.push('/');
            }}
          />
        )}
      </NavContainer>
    </Container>
  );
};

export default Header;
