'use client';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { AxiosError, AxiosResponse } from 'axios';
import { parseCookies } from 'nookies';
import store, { useAppDispatch } from '@/store/store';
import api from '@/helpers/api';

import ButtonComponent from '@/components/button/Button';
import Modal from '../../components/Modals/PaymentModal';
import { MdAccountBalance } from 'react-icons/md';
import { Container, Sections } from './styled';
import DepositModal from '@/components/Modals/DepositModal';
import { setBalance } from '@/store/auth/auth';
import { toast } from 'react-toastify';
import TransferModal from '@/components/Modals/TransferModal';
import { FaPassport } from 'react-icons/fa';

const HomeApp = () => {
  const [modal, setModal] = useState<boolean>(false);
  const [ModalDeposit, setModalDeposit] = useState<boolean>(false);
  const [ModalTransfer, setModalTransfer] = useState<boolean>(false);
  const [balanceValue, setBalanceValue] = useState<number>();
  const HeaderNoSSR = dynamic(() => import('../../components/header/Header'));

  const dispatch = useAppDispatch();

  useEffect(() => {
    const { token } = parseCookies();
    const balance = store.getState().balance;
    const user = {
      id: store.getState().user,
    };

    if (balance) return;
    api
      .post('/balance/create', user, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res: AxiosResponse) => {
        const { message } = res?.data;
        dispatch(setBalance(true));
        toast.success(message);
      })
      .catch((err: AxiosError) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    const { token } = parseCookies();

    api
      .get('/balance/getBalance', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((resp: AxiosResponse) => {
        setBalanceValue(resp.data?.valueBalance);
      })
      .catch((err: AxiosError) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <HeaderNoSSR />
      <Container>
        <Sections id="Payment Section">
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
        </Sections>
        <Sections id="Deposit Section">
          <h2>Deposit your money</h2>
          <h3>Account: R$ {balanceValue}</h3>
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
        </Sections>
        <Sections id="Transfer Section">
          <h2>Transfer you money</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
            fuga quae culpa iusto odio assumenda aperiam cumque magni provident?
            Consequatur ipsa sunt animi corporis, iure soluta optio eum iste
            non.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem, atque
            optio maxime quae similique, repudiandae, doloribus laudantium modi
            illum eligendi doloremque necessitatibus neque ut fuga accusantium
            eos repellat recusandae provident?
          </p>
          <ButtonComponent
            text="Transfer"
            handleClick={() => {
              setModalTransfer(true);
            }}
          />

          {ModalTransfer && (
            <TransferModal
              Title="Transfer"
              name="cpf"
              type="text"
              Icon={FaPassport}
              placeholder="Cpf"
              key="Transfer modal"
              onClose={() => setModalDeposit(false)}
              TextButton="Transfer"
            />
          )}
        </Sections>
      </Container>
      {/* TODO: transfer modal */}
    </>
  );
};

export default HomeApp;
