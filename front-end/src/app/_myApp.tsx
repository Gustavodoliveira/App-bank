'use client';

import { AppProps } from 'next/app';

import { Provider } from 'react-redux';
('react-redux');
import store from '../store/store';

export const MyApp = ({ children }: { children: React.ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};
