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
  value?: string;
}

export const Input = ({
  name,
  type,
  placeholder,
  handleChange,
  Icon,
  value,
}: InputProps) => {
  return (
    <Container>
      <Label htmlFor={name}>{Icon && <Icon className="input-icon" />}</Label>
      <InputStyled
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
        name={name}
        value={value}
      />
    </Container>
  );
};
