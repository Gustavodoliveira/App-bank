import React, { useEffect, useState } from 'react';
import {
  ContentContainer,
  ModalBack,
  ModalContainer,
  ModalHeader,
  ModalWrapper,
} from './payment';
import { AiFillCloseSquare } from 'react-icons/ai';
import { MdOutlinePayment } from 'react-icons/md';
import { Input, InputProps } from '../input/Input';
import ButtonComponent from '../button/Button';
import { IconType } from 'react-icons';
import { userDeposit } from '@/interfaces/user';
import api from '@/helpers/api';
import { parseCookies } from 'nookies';
import { AxiosError, AxiosResponse } from 'axios';
import store from '@/store/store';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

interface ModalProps extends InputProps {
  onClose: any;
  nameTwo: string;
  Title: string;
  key: string;
  TextButton: string;
  Icon: IconType;
}

const DepositModal = ({
  onClose,
  Title,
  name,
  placeholder,
  type,
  key,
  TextButton,
  Icon,
}: ModalProps) => {
  const CloseModal = (e: Event) => {
    e.preventDefault();
    onClose();
  };

  const [token, setToken] = useState<string>('');
  const [user, setUser] = useState<userDeposit>({
    Amount: '',
    userId: '',
  });

  useEffect(() => {
    const { token } = parseCookies();
    const id = store.getState().user;
    setUser({ userId: id, Amount: '' });
    setToken(token);
  }, []);

  async function onClick() {
    await api
      .post('/balance/deposit', user, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((resp: AxiosResponse) => {
        onClose(false);
        useRouter().refresh;
      })
      .catch((err: AxiosError) => {
        console.log(err);
      });
  }

  return (
    <ModalContainer>
      <ModalWrapper>
        <ModalBack>
          <ModalHeader>
            <h4>{Title}</h4>
            <AiFillCloseSquare onClick={CloseModal} />
          </ModalHeader>
          <ContentContainer>
            <Input
              name={name}
              placeholder={placeholder}
              type={type}
              key={key}
              Icon={Icon}
              value={user.userId}
              handleChange={(e) => setUser({ ...user, userId: e.target.value })}
            />
            <Input
              name="Amount"
              placeholder="R$ "
              type="text"
              key="Payment"
              Icon={MdOutlinePayment}
              handleChange={(e) => setUser({ ...user, Amount: e.target.value })}
            />
            <ButtonComponent text={TextButton} handleClick={onClick} />
          </ContentContainer>
        </ModalBack>
      </ModalWrapper>
    </ModalContainer>
  );
};

export default DepositModal;
