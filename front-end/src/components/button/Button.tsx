import React from 'react';
import { Btn } from './button';
import { handleSubmit } from '@/helpers/function';

export interface ButtonProps {
  handleClick?: React.MouseEventHandler<HTMLButtonElement>;
  text: string;
}

const ButtonComponent = ({ handleClick, text }: ButtonProps) => {
  return (
    <Btn onSubmit={handleSubmit} onClick={handleClick}>
      {text}
    </Btn>
  );
};

export default ButtonComponent;
