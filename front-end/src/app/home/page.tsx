'use client';

import PaymentModal from '@/components/PaymentModal/PaymentModal';
import ButtonComponent from '@/components/button/Button';
import Header from '@/components/header/Header';
import { useState } from 'react';

const HomeApp = () => {
  const [Modal, setModal] = useState(false);

  return (
    <>
      <Header />
      <h2>Welcome</h2>
      <h3>Your balance</h3>
      <ButtonComponent text="Payment" handleClick={() => setModal(true)} />
      {Modal && <PaymentModal onClose={() => setModal(false)} />}
      {/* TODO: transfer modal */}
    </>
  );
};

export default HomeApp;
