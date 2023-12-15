'use client';
import { Input } from '@/components/input/Input';
import ButtonComponent from '@/components/button/Button';
import { RiLockPasswordFill } from 'react-icons/ri';
import { AiOutlineMail } from 'react-icons/ai';
import { FormController } from '@/styles/GlobalStyle';
import { ILoginUser } from '@/interfaces/user';
import { useState } from 'react';
import api from '@/helpers/api';
import { AxiosError, AxiosResponse } from 'axios';
import { Container, SectionWelcome } from '../register/style';

const login = () => {
  const [user, setUser] = useState<ILoginUser>({
    email: '',
    password: '',
  });

  async function LoginUser() {
    await api
      .post('/user/login', user)
      .then((resp: AxiosResponse) => {
        const { message, token, user } = resp.data;
        localStorage.setItem('token', JSON.stringify(token));
        localStorage.setItem('user', JSON.stringify(user));
      })
      .catch((err: AxiosError) => {
        const message: any = err.response?.data;
      });
  }

  return (
    <Container>
      <SectionWelcome>
        <h1>Welcome back</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores
          debitis labore ex nihil consequatur vel accusamus tempore eius. Quia
          recusandae voluptas enim error commodi et id ullam omnis asperiores?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
          doloribus, expedita cum quis porro saepe, modi quos vel id earum amet
          dolor est accusantium ad ipsa hic impedit maxime ab. Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Nobis dolor hic sapiente eos
          minus error reiciendis id at fugit maxime quae, odit, molestias et
          blanditiis sed odio nihil dignissimos. Ea.
        </p>
      </SectionWelcome>
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
    </Container>
  );
};

export default login;
