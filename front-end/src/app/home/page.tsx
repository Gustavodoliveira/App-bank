'use client';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { AxiosError, AxiosResponse } from 'axios';
import { parseCookies } from 'nookies';
import store from '@/store/store';
import api from '@/helpers/api';

import ButtonComponent from '@/components/button/Button';
import Modal from '../../components/PaymentModal/PaymentModal';
import { MdAccountBalance } from 'react-icons/md';
import { Container, PaymentSection, TransferSection } from './styled';
import DepositModal from '@/components/PaymentModal/DepositModal';

const HomeApp = () => {
  const [modal, setModal] = useState<boolean>(false);
  const [ModalDeposit, setModalDeposit] = useState<boolean>(false);
  const [Token, setToken] = useState<string>('');
  const [UserId, setUserId] = useState<string>('');
  const [Balance, setBalance] = useState<number>();
  const HeaderNoSSR = dynamic(() => import('../../components/header/Header'));

  const navigate = useRouter();

  useEffect(() => {
    const { token } = parseCookies();
    setToken(token);

    api
      .get('/balance/getBalance', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((resp: AxiosResponse) => {
        setBalance(resp.data?.valueBalance);
      })
      .catch((err: AxiosError) => {
        console.log(err);
      });
  }, []);

  async function BalanceCreate() {
    await api
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

  //async function Deposit () {
  //  const
  //}

  return (
    <>
      <HeaderNoSSR />
      <Container>
        <PaymentSection>
          <h2>Here you can pay your bill</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam,
            doloribus aperiam delectus nihil quasi voluptates id, et in optio
            quos eveniet suscipit, amet accusantium voluptate molestiae tempora
            libero! Alias, praesentium!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla
            dolorem voluptatum delectus minus molestiae animi ut soluta. Neque
            inventore unde iure labore quae consequuntur, nulla soluta vitae
            facere velit veritatis!
          </p>
          <ButtonComponent
            text="Payment"
            handleClick={() => {
              setModal(true);
            }}
          />
          {modal && (
            <Modal
              name="Account"
              nameTwo="Payment"
              placeholder="to pay account"
              type="text"
              key="Modal payment"
              Title="Payment"
              TextButton="Payment"
              Icon={MdAccountBalance}
              onClose={() => setModal(false)}
            />
          )}
        </PaymentSection>
        <TransferSection>
          <h2>Deposit your money</h2>
          <h3>Account: R$ {Balance}</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
            iste quo perspiciatis sit pariatur illum accusamus vero impedit
            eaque facilis, reiciendis possimus praesentium expedita optio ipsa
            saepe omnis! In, doloribus.
          </p>
          <ButtonComponent
            text="Deposit"
            handleClick={() => {
              setModalDeposit(true);
            }}
          />
          {ModalDeposit && (
            <DepositModal
              name="userId"
              nameTwo="Amount"
              placeholder="Deposit your money"
              type="text"
              key="Modal payment"
              Title="Deposit"
              TextButton="Deposit"
              Icon={MdAccountBalance}
              onClose={() => setModalDeposit(false)}
            />
          )}
        </TransferSection>
      </Container>
      {/* TODO: transfer modal */}
    </>
  );
};

export default HomeApp;
