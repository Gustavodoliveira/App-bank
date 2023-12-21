'use client';

import React, { ChangeEventHandler } from 'react';
import { Container, InputStyled, Label } from './input';
import { IconType } from 'react-icons';

export interface InputProps {
  name: string;
  type: string;
  placeholder: string;
  handleChange?: React.ChangeEventHandler<HTMLInputElement>;
  Icon?: IconType;
}

export const Input = ({
  name,
  type,
  placeholder,
  handleChange,
  Icon,
}: InputProps) => {
  return (
    <Container>
      <Label htmlFor={name}>{Icon && <Icon className="input-icon" />}</Label>
      <InputStyled
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
        name={name}
      />
    </Container>
  );
};
