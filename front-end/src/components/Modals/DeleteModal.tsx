import React, { useEffect, useState } from 'react';
import {
  ContentContainer,
  ModalBack,
  ModalContainer,
  ModalHeader,
  ModalWrapper,
} from './payment';
import { AiFillCloseSquare } from 'react-icons/ai';
import api from '@/helpers/api';
import { destroyCookie, parseCookies } from 'nookies';
import { AxiosError, AxiosResponse } from 'axios';
import store, { useAppDispatch } from '@/store/store';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { logout, setBalance } from '@/store/auth/auth';

interface ModalProps {
  onClose: any;
}

const DeleteModal = ({ onClose }: ModalProps) => {
  const CloseModal = (e: Event) => {
    e.preventDefault();
    onClose();
  };

  const [token, setToken] = useState<string>('');
  const [user, setUser] = useState<string>('');
  const navigate = useRouter();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const { token } = parseCookies();
    const id = store.getState().user;
    setUser(id);
    setToken(token);
  }, []);

  async function handleClick() {
    await api
      .delete(`/user/deleteUser/${user}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res: AxiosResponse) => {
        toast.success(res.data?.message);
        dispatch(logout(false));
        dispatch(setBalance(false));
        destroyCookie(undefined, 'token');
        navigate.push('/');
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
            <h4>Delete</h4>
            <AiFillCloseSquare className="icon" onClick={CloseModal} />
          </ModalHeader>
          <ContentContainer>
            <h5>Do you want to delete your account ?</h5>
            <button onClick={handleClick}>Yes</button>
            <button onClick={() => onClose(false)}>No</button>
          </ContentContainer>
        </ModalBack>
      </ModalWrapper>
    </ModalContainer>
  );
};

export default DeleteModal;
