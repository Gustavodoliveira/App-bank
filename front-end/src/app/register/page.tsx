'use client';

import { Container, FormRegister } from './style';
import { Input } from '../../components/input/Input';
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
import { useState } from 'react';
import { User } from '@/interfaces/user';
import { handleSubmit, logToConsole } from '@/helpers/function';
import api from '@/helpers/api';
import { AxiosError, AxiosResponse } from 'axios';
import { log } from 'console';

const register = () => {
  const [user, setUser] = useState<User>({
    name: '',
    email: '',
    cpf: '',
    address: '',
    age: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  async function PostUser() {
    console.log(process.env.API);
    await api
      .post('/user/register', user, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res: AxiosResponse) => {
        logToConsole(res);
      })
      .catch((err: AxiosError) => {
        logToConsole(err);
      });
  }

  return (
    <Container>
      <div className="welcome">
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
      </div>
      <FormRegister onSubmit={handleSubmit}>
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
      </FormRegister>
    </Container>
  );
};

export default register;
