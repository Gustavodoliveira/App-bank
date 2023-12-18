'use client';

import PaymentModal from '@/components/PaymentModal/PaymentModal';
import ButtonComponent from '@/components/button/Button';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import api from '@/helpers/api';
import { AxiosError, AxiosResponse } from 'axios';

const HomeApp = () => {
  const [Modal, setModal] = useState(false);
  const [Token, setToken] = useState<string>('');

  const [userId, setuserId] = useState({
    userId: '',
  });

  const HeaderNoSSR = dynamic(() => import('../../components/header/Header'), {
    ssr: false,
  });

  // get token and user the local storage
  useEffect(() => {
    const iToken = localStorage.getItem('token');
    if (!iToken) return;
    setToken(JSON.stringify(iToken));

    const user = localStorage.getItem('user');
    if (!user) return;
    const iModel = user;

    setuserId({ userId: iModel });
  }, []);

  async function BalanceCreate() {
    api
      .post('/balance/create', userId, {
        headers: {
          Authorization: `Bearer ${JSON.parse(Token)}`,
        },
      })
      .then((resp: AxiosResponse) => {
        console.log(resp);
      })
      .catch((err: AxiosError) => {
        console.log(err);
      });
  }

  return (
    <>
      <HeaderNoSSR />
      <h2>Welcome</h2>
      <h3>Your balance</h3>
      <ButtonComponent
        text="Payment"
        handleClick={() => {
          BalanceCreate();
        }}
      />
      {Modal && <PaymentModal onClose={() => setModal(false)} />}
      {/* TODO: transfer modal */}
    </>
  );
};

export default HomeApp;
