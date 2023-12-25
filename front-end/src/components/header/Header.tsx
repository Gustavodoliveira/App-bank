'use client';

import React, { useEffect, useState } from 'react';
import { Container, NavContainer } from './header';
import Link from 'next/link';

import { AiOutlineMenu, AiOutlineLogout } from 'react-icons/ai';
import store, { useAppDispatch } from '@/store/store';
import { logout, setBalance } from '@/store/auth/auth';
import { useRouter } from 'next/navigation';
import { destroyCookie, parseCookies } from 'nookies';
import api from '@/helpers/api';
import { AxiosError, AxiosResponse } from 'axios';
import { toast } from 'react-toastify';
import { IUser } from '@/interfaces/user';

const Header = () => {
  const [Active, isActive] = useState(false);
  const [UserAuth, setUserAuth] = useState<boolean>(false);
  const [user, setUser] = useState<IUser>({
    image: '',
    address: '',
    age: '',
    confirmPassword: '',
    cpf: '',
    email: '',
    name: '',
    password: '',
    phone: '',
  });
  const navigate = useRouter();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const { token } = parseCookies();
    if (!token) return;
    setUserAuth(store.getState().isLogged);

    const user = store.getState().user;
    console.log(user);

    api
      .get(`user/getUser/${user}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res: AxiosResponse) => {
        setUser(res.data?.user);
      })
      .catch((err: AxiosError) => {
        toast.error('Something went wrong');
      });
  }, [UserAuth]);

  return (
    <Container>
      <h1>App-bank</h1>
      <NavContainer>
        <AiOutlineMenu
          className="menu"
          onClick={() => (Active ? isActive(false) : isActive(true))}
        />
        <img src={`${api}/public/${user.image}`} alt="" />
        <ul className={Active ? 'active' : ''}>
          {UserAuth ? (
            <li
              className="after-border-bottom"
              onClick={() => (Active ? isActive(false) : isActive(true))}
            >
              <Link href="/profile">Profile</Link>
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
        {UserAuth && (
          <AiOutlineLogout
            className="icon icon-logout"
            onClick={() => {
              dispatch(logout(false));
              dispatch(setBalance(false));
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
