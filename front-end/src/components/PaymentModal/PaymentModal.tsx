import React from 'react';
import {
  ModalBack,
  ModalContainer,
  ModalHeader,
  ModalWrapper,
} from './payment';
import { AiFillCloseSquare } from 'react-icons/ai';

interface PaymentProps {
  onClose: Function;
}

const PaymentModal = ({ onClose }: any) => {
  const CloseModal = (e: Event) => {
    e.preventDefault();
    onClose();
  };

  return (
    <ModalContainer>
      <ModalWrapper>
        <ModalBack>
          <ModalHeader>
            <h4>Payment</h4>
            <AiFillCloseSquare onClick={CloseModal} />
          </ModalHeader>
          {/* TODO: form to payment */}
        </ModalBack>
      </ModalWrapper>
    </ModalContainer>
  );
};

export default PaymentModal;
