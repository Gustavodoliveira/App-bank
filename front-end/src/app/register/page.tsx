'use client';

import { useState } from 'react';
import { IUser } from '@/interfaces/user';
import { handleSubmit, logToConsole } from '@/helpers/function';
import api from '@/helpers/api';
import { AxiosError, AxiosResponse } from 'axios';

import {
  FaRegUser,
  FaAddressCard,
  FaPhone,
  FaBirthdayCake,
  FaPassport,
} from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { RiLockPasswordFill } from 'react-icons/ri';

import ButtonComponent from '@/components/button/Button';
import { Input } from '../../components/input/Input';
import { FormController } from '@/styles/GlobalStyle';
import { Container, SectionWelcome } from './style';
import { login } from '@/store/auth/auth';
import { useRouter } from 'next/navigation';
import store from '@/store/store';

const Register = () => {
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

  async function PostUser() {
    await api
      .post('/user/register', user, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res: AxiosResponse) => {
        navigate.push('/');
        store.dispatch(login());
      })
      .catch((err: AxiosError) => {
        logToConsole(err);
      });
  }

  return (
    <Container>
      <SectionWelcome>
        <h1>Create your account on our app</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore
          impedit obcaecati adipisci ullam, libero facere ducimus temporibus
          veritatis dolorem quos veniam praesentium, voluptates dolor,
          distinctio deserunt natus! Illum, itaque quasi!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde culpa
          accusantium vero, molestiae cumque architecto nemo tenetur
          perspiciatis possimus, error vitae aperiam. Quaerat amet commodi
          repellendus quas nemo obcaecati sequi.
        </p>
      </SectionWelcome>
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
    </Container>
  );
};

export default Register;
