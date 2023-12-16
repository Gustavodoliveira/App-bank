'use client';

import React, { useState } from 'react';
import { Container, NavContainer } from './header';
import Link from 'next/link';

import { AiOutlineMenu } from 'react-icons/ai';

export const Header = () => {
  const [Active, isActive] = useState(false);
  return (
    <Container>
      <h1>App-bank</h1>
      <NavContainer>
        <AiOutlineMenu
          className="menu"
          onClick={() => (Active ? isActive(false) : isActive(true))}
        />
        <ul className={Active ? 'active' : ''}>
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
