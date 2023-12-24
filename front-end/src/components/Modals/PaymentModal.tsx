import React from 'react';
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

interface ModalProps extends InputProps {
  onClose: any;
  nameTwo: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  Title: string;
  key: string;
  TextButton: string;
  Icon: IconType;
}

const Modal = ({
  onClose,
  onClick,
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
            />
            <Input
              name={nameTwo}
              placeholder="R$ "
              type="text"
              key="Payment"
              Icon={MdOutlinePayment}
            />
            <ButtonComponent text={TextButton} handleClick={onClick} />
          </ContentContainer>
        </ModalBack>
      </ModalWrapper>
    </ModalContainer>
  );
};

export default Modal;
