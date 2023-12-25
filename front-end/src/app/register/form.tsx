'use client';
import ButtonComponent from '@/components/button/Button';
import { Input } from '@/components/input/Input';
import api from '@/helpers/api';
import { handleSubmit, logToConsole } from '@/helpers/function';
import { IUser } from '@/interfaces/user';
import { login, setUserState } from '@/store/auth/auth';
import store, { useAppDispatch } from '@/store/store';
import { FormController } from '@/styles/GlobalStyle';
import { AxiosError, AxiosResponse } from 'axios';
import { useRouter } from 'next/navigation';
import { setCookie } from 'nookies';
import React, { useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import {
  FaAddressCard,
  FaBirthdayCake,
  FaPassport,
  FaPhone,
  FaRegUser,
  FaFileImage,
} from 'react-icons/fa';
import { RiLockPasswordFill } from 'react-icons/ri';
import { toast } from 'react-toastify';

const RegisterForm = () => {
  const [user, setUser] = useState<IUser>({
    image: '',
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
        const { user, token, message } = res?.data;
        const userId = {
          id: user,
        };

        dispatch(login(true));
        dispatch(setUserState(user));
        setCookie(undefined, 'token', token, {
          maxAge: 60 * 60 * 24, //24 hours
        });
        toast.success(message);
        navigate.push('/home');
      })
      .catch((err: AxiosError) => {
        toast.error(err.response?.data?.message);
      });
  }

  return (
    <FormController onSubmit={handleSubmit}>
      <Input
        type="file"
        name="image"
        Icon={FaFileImage}
        placeholder="Image"
        handleChange={(e) => {
          if (!e.target.files) return;
          setUser({ ...user, image: e.target.files[0] });
        }}
      />
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
        <ButtonComponent text="Register" handleClick={PostUser} />
      </div>
    </FormController>
  );
};

export default RegisterForm;
