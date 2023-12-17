'use client';

import PaymentModal from '@/components/PaymentModal/PaymentModal';
import ButtonComponent from '@/components/button/Button';
import dynamic from 'next/dynamic';
import { useState } from 'react';

const HomeApp = () => {
  const [Modal, setModal] = useState(false);
  const HeaderNoSSR = dynamic(() => import('../../components/header/Header'), {
    ssr: false,
  });

  return (
    <>
      <HeaderNoSSR />
      <h2>Welcome</h2>
      <h3>Your balance</h3>
      <ButtonComponent text="Payment" handleClick={() => setModal(true)} />
      {Modal && <PaymentModal onClose={() => setModal(false)} />}
      {/* TODO: transfer modal */}
    </>
  );
};

export default HomeApp;
