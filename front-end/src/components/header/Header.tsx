'use client';

import React, { useState } from 'react';
import { Container, NavContainer } from './header';
import Link from 'next/link';

import { AiOutlineMenu, AiOutlineLogout } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import store, { RootState } from '@/store/store';
import { logout } from '@/store/auth/auth';

export const Header = () => {
  const [Active, isActive] = useState(false);
  const userAuth = store.getState().isLogged;
  return (
    <Container>
      <h1>App-bank</h1>
      <NavContainer>
        <AiOutlineMenu
          className="menu"
          onClick={() => (Active ? isActive(false) : isActive(true))}
        />
        <ul className={Active ? 'active' : ''}>
          {userAuth ? (
            <AiOutlineLogout onClick={() => store.dispatch(logout(false))} />
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
      </NavContainer>
    </Container>
  );
};
