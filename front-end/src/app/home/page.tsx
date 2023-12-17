'use client';

import ButtonComponent from '@/components/button/Button';
import Header from '@/components/header/Header';

const HomeApp = () => {
  return (
    <>
      <Header />
      <h2>Welcome</h2>
      <h3>Your balance</h3>
      <ButtonComponent text="Payment" />
    </>
  );
};

export default HomeApp;
