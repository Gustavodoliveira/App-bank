import React from 'react';
import { Container } from './button';

export interface ButtonProps {
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
  text: string;
}

const ButtonComponent = ({ handleClick, text }: ButtonProps) => {
  return <Container onClick={handleClick}>{text}</Container>;
};

export default ButtonComponent;
