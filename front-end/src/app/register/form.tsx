'use client';
import ButtonComponent from '@/components/button/Button';
import { Input } from '@/components/input/Input';
import api from '@/helpers/api';
import { handleSubmit, logToConsole } from '@/helpers/function';
import { IUser } from '@/interfaces/user';
import { login } from '@/store/auth/auth';
import store, { useAppDispatch } from '@/store/store';
import { FormController } from '@/styles/GlobalStyle';
import { AxiosError, AxiosResponse } from 'axios';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import {
  FaAddressCard,
  FaBirthdayCake,
  FaPassport,
  FaPhone,
  FaRegUser,
} from 'react-icons/fa';
import { RiLockPasswordFill } from 'react-icons/ri';

const RegisterForm = () => {
  const [user, setUser] = useState<IUser>({
    name: '',
    email: '',
    cpf: '',
    address: '',
    age: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });
  const navigate = useRouter();
  const dispatch = useAppDispatch();

  async function PostUser() {
    await api
      .post('/user/register', user, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res: AxiosResponse) => {
        dispatch(login(true));
        navigate.push('/home');
      })
      .catch((err: AxiosError) => {
        logToConsole(err);
      });
  }

  return (
    <FormController onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Name"
        name="name"
        Icon={FaRegUser}
        handleChange={(e) => setUser({ ...user, name: e.target.value })}
      />
      <Input
        type="e-mail"
        placeholder="E-mail"
        name="email"
        Icon={AiOutlineMail}
        handleChange={(e) => setUser({ ...user, email: e.target.value })}
      />
      <Input
        type="text"
        placeholder="Cpf"
        name="cpf"
        Icon={FaPassport}
        handleChange={(e) => setUser({ ...user, cpf: e.target.value })}
      />
      <Input
        type="text"
        placeholder="Address"
        name="address"
        Icon={FaAddressCard}
        handleChange={(e) => setUser({ ...user, address: e.target.value })}
      />
      <Input
        type="text"
        placeholder="Phone"
        name="phone"
        Icon={FaPhone}
        handleChange={(e) => setUser({ ...user, phone: e.target.value })}
      />
      <Input
        type="text"
        placeholder="Age"
        name="age"
        Icon={FaBirthdayCake}
        handleChange={(e) => setUser({ ...user, age: e.target.value })}
      />
      <Input
        type="password"
        placeholder="Password"
        name="password"
        Icon={RiLockPasswordFill}
        handleChange={(e) => setUser({ ...user, password: e.target.value })}
      />
      <Input
        type="password"
        placeholder="Confirm Password"
        name="confirmPassword"
        Icon={RiLockPasswordFill}
        handleChange={(e) =>
          setUser({ ...user, confirmPassword: e.target.value })
        }
      />
      <div className="centralize btn-register">
        <ButtonComponent text="register" handleClick={PostUser} />
      </div>
    </FormController>
  );
};

export default RegisterForm;
