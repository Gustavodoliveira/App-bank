import React from 'react';
import ReduxProvider from '../ReduxProvider';
import RegisterForm from './form';

const FormRegisterWrapper = () => {
  return (
    <ReduxProvider>
      <RegisterForm />
    </ReduxProvider>
  );
};

export default FormRegisterWrapper;
