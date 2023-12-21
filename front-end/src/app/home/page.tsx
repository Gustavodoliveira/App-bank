'use client';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { AxiosError, AxiosResponse } from 'axios';
import { parseCookies } from 'nookies';
import store from '@/store/store';
import api from '@/helpers/api';

import ButtonComponent from '@/components/button/Button';
import Modal from '../../components/PaymentModal/PaymentModal';
import { MdAccountBalance } from 'react-icons/md';

const HomeApp = () => {
  const [modal, setModal] = useState<boolean>(false);
  const [Token, setToken] = useState<string>('');
  const [UserId, setUserId] = useState<string>('');
  const [Balance, setBalance] = useState<number>();

  const HeaderNoSSR = dynamic(() => import('../../components/header/Header'), {
    ssr: false,
  });

  useEffect(() => {
    const { token } = parseCookies();
    setToken(token);
    setUserId(store.getState().user);

    if (!token) return;

    api
      .get('/balance/getBalance', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((resp: AxiosResponse) => {
        setBalance(resp.data?.valueBalance);
        console.log(resp);
      })
      .catch((err: AxiosError) => {
        console.log(err);
      });
  }, []);

  function BalanceCreate() {
    api
      .post('/balance/create', UserId, {
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
      <h3>Your balance: {Balance}</h3>
      <ButtonComponent
        text="Payment"
        handleClick={() => {
          setModal(true);
        }}
      />
      {modal && (
        <Modal
          name="Modal"
          placeholder="to pay account"
          type="text"
          key="Modal payment"
          Title="Payment"
          TextButton="Payment"
          Icon={MdAccountBalance}
          onClose={() => setModal(false)}
        />
      )}
      {/* TODO: transfer modal */}
    </>
  );
};

export default HomeApp;
