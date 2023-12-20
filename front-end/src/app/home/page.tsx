'use client';
import PaymentModal from '@/components/PaymentModal/PaymentModal';
import ButtonComponent from '@/components/button/Button';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import api from '@/helpers/api';
import { AxiosError, AxiosResponse } from 'axios';
import { GetServerSideProps } from 'next';
import { parseCookies } from 'nookies';

const HomeApp = () => {
  //const [Modal, setModal] = useState(false);

  const HeaderNoSSR = dynamic(() => import('../../components/header/Header'), {
    ssr: false,
  });

  useEffect(() => {
    const { token } = parseCookies();

    api
      .get('/balance/getBalance', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((resp: AxiosResponse) => {
        console.log(resp);
        return { token, resp };
      })
      .catch((err: AxiosError) => {
        console.log(err);
      });
  }, []);

  //async function BalanceCreate() {
  //  api
  //    .post('/balance/create', userId, {
  //      headers: {
  //        Authorization: `Bearer ${JSON.parse(Token)}`,
  //      },
  //    })
  //    .then((resp: AxiosResponse) => {
  //      console.log(resp);
  //    })
  //    .catch((err: AxiosError) => {
  //      console.log(err);
  //    });
  //}

  return (
    <>
      <HeaderNoSSR />
      <h2>Welcome</h2>
      <h3>Your balance</h3>
      <ButtonComponent
        text="Payment"
        handleClick={() => {
          //BalanceCreate();
        }}
      />
      {/*{Modal && <PaymentModal onClose={() => setModal(false)} />}*/}
      {/* TODO: transfer modal */}
    </>
  );
};

export default HomeApp;
