import React, { useEffect, useState } from 'react';
import {
  ContentContainer,
  ModalBack,
  ModalContainer,
  ModalHeader,
  ModalWrapper,
} from './payment';
import { AiFillCloseSquare } from 'react-icons/ai';
import ButtonComponent from '../button/Button';
import api from '@/helpers/api';
import { parseCookies } from 'nookies';
import { AxiosError, AxiosResponse } from 'axios';
import store from '@/store/store';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

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

  useEffect(() => {
    const { token } = parseCookies();
    const id = store.getState().user;
    setUser(id);
    setToken(token);
  }, []);

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
            <button>Yes</button>
            <button onClick={() => onClose(false)}>No</button>
          </ContentContainer>
        </ModalBack>
      </ModalWrapper>
    </ModalContainer>
  );
};

export default DeleteModal;
