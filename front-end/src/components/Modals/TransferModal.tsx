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
import { userTransfer } from '@/interfaces/user';
import api from '@/helpers/api';
import { parseCookies } from 'nookies';
import { AxiosError, AxiosResponse } from 'axios';
import { toast } from 'react-toastify';

interface ModalProps extends InputProps {
  onClose: any;
  Title: string;
  key: string;
  TextButton: string;
  Icon: IconType;
}

const TransferModal = ({
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
  const [user, setUser] = useState<userTransfer>({
    cpf: '',
    value: '',
  });

  useEffect(() => {
    const { token } = parseCookies();
    setToken(token);
  }, []);

  async function onClick() {
    await api
      .post('/balance/transfer', user, {
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
            <AiFillCloseSquare className="icon" onClick={CloseModal} />
          </ModalHeader>
          <ContentContainer>
            <Input
              name={name}
              placeholder={placeholder}
              type={type}
              key={key}
              Icon={Icon}
              handleChange={(e) => setUser({ ...user, cpf: e.target.value })}
            />
            <Input
              name="value"
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

export default TransferModal;
