import React from 'react';
import { Btn } from './button';

export interface ButtonProps {
  handleClick?: React.MouseEventHandler<HTMLButtonElement>;
  text: string;
}

const ButtonComponent = ({ handleClick, text }: ButtonProps) => {
  return <Btn onClick={handleClick}>{text}</Btn>;
};

export default ButtonComponent;
