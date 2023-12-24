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
import api from '@/helpers/api';
import { userPayment } from '@/interfaces/user';
import store from '@/store/store';
import { parseCookies } from 'nookies';
import { AxiosError, AxiosResponse } from 'axios';
import { toast } from 'react-toastify';

interface ModalProps extends InputProps {
  onClose: any;
  nameTwo: string;
  Title: string;
  key: string;
  TextButton: string;
  Icon: IconType;
}

const Modal = ({
  onClose,
  Title,
  name,
  nameTwo,
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
  const [user, setUser] = useState<userPayment>({
    AccountName: '',
    value: '',
    id: '',
  });

  useEffect(() => {
    const { token } = parseCookies();
    const id = store.getState().user;
    setUser({ id: id, AccountName: '', value: '' });
    setToken(token);
  }, []);

  async function onClick() {
    await api
      .post('/balance/payment', user, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((resp: AxiosResponse) => {
        onClose(false);
        toast.success(resp?.data?.message);
      })
      .catch((err: AxiosError) => {
        toast.error(err.response?.data?.message);
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
              handleChange={(e) =>
                setUser({ ...user, AccountName: e.target.value })
              }
            />
            <Input
              name={nameTwo}
              placeholder="R$ "
              type="text"
              key="Payment"
              Icon={MdOutlinePayment}
              handleChange={(e) => setUser({ ...user, value: e.target.value })}
            />
            <ButtonComponent text={TextButton} handleClick={onClick} />
          </ContentContainer>
        </ModalBack>
      </ModalWrapper>
    </ModalContainer>
  );
};

export default Modal;
