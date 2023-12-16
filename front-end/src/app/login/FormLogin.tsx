'use client';

import ButtonComponent from '@/components/button/Button';
import { Input } from '@/components/input/Input';
import api from '@/helpers/api';
import { ILoginUser } from '@/interfaces/user';
import { login } from '@/store/auth/auth';
import store from '@/store/store';
import { FormController } from '@/styles/GlobalStyle';
import { AxiosError, AxiosResponse } from 'axios';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { RiLockPasswordFill } from 'react-icons/ri';

const FormLogin = () => {
  const [user, setUser] = useState<ILoginUser>({
    email: '',
    password: '',
  });

  const navigate = useRouter();

  async function LoginUser() {
    await api
      .post('/user/login', user)
      .then((resp: AxiosResponse) => {
        const { message, token, user } = resp.data;
        localStorage.setItem('token', JSON.stringify(token));
        localStorage.setItem('user', JSON.stringify(user));
        store.dispatch(login(true));
        navigate.push('/home');
      })
      .catch((err: AxiosError) => {
        const message: any = err.response?.data;
      });
  }

  return (
    <FormController>
      <Input
        type="e-mail"
        placeholder="E-mail"
        name="email"
        Icon={AiOutlineMail}
        handleChange={(e) => setUser({ ...user, email: e.target.value })}
      />
      <Input
        type="password"
        placeholder="Password"
        name="password"
        Icon={RiLockPasswordFill}
        handleChange={(e) => setUser({ ...user, password: e.target.value })}
      />
      <div className="centralize btn-register">
        <ButtonComponent text="login" handleClick={LoginUser} />
      </div>
    </FormController>
  );
};

export default FormLogin;
