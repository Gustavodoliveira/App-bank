'use client';
import ButtonComponent from '@/components/button/Button';
import { Input } from '@/components/input/Input';
import api from '@/helpers/api';
import { handleSubmit } from '@/helpers/function';
import { IUserUpdate } from '@/interfaces/user';
import store, { useAppDispatch } from '@/store/store';
import { FormController } from '@/styles/GlobalStyle';
import { AxiosError, AxiosResponse } from 'axios';
import { useRouter } from 'next/navigation';
import { parseCookies } from 'nookies';
import React, { useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FaAddressCard, FaFileImage, FaPhone, FaRegUser } from 'react-icons/fa';
import { RiLockPasswordFill } from 'react-icons/ri';
import { toast } from 'react-toastify';
import { FormUpdate } from './profileStyled';

const UpdateForm = () => {
  const [user, setUser] = useState<IUserUpdate>({
    image: '',
    email: '',
    address: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });
  const navigate = useRouter();

  async function UpdateUser() {
    const { token } = parseCookies();
    const id = store.getState().user;

    await api
      .patch(`/user/updateUser/${id}`, user, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res: AxiosResponse) => {
        const { message } = res?.data;
        toast.success(message);
        navigate.push('/home');
      })
      .catch((err: AxiosError) => {
        toast.error(err.response?.data?.message);
      });
  }

  return (
    <FormUpdate onSubmit={handleSubmit}>
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
        type="e-mail"
        placeholder="E-mail"
        name="email"
        Icon={AiOutlineMail}
        handleChange={(e) => setUser({ ...user, email: e.target.value })}
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
        <ButtonComponent text="UPDATE" handleClick={UpdateUser} />
      </div>
    </FormUpdate>
  );
};

export default UpdateForm;
