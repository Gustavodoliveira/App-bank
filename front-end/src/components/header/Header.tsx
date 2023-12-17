'use client';

import React, { useState } from 'react';
import { Container, NavContainer } from './header';
import Link from 'next/link';

import { AiOutlineMenu, AiOutlineLogout } from 'react-icons/ai';
import store from '@/store/store';
import { logout } from '@/store/auth/auth';
import { useRouter } from 'next/navigation';

export const Header = () => {
  const [Active, isActive] = useState(false);
  const userAuth = store.getState().isLogged;
  const navigate = useRouter();

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
            <li>
              <AiOutlineLogout
                onClick={() => {
                  store.dispatch(logout(false));
                  navigate.push('/');
                }}
              />
            </li>
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
