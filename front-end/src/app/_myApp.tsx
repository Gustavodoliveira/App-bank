'use client';

import { AppProps } from 'next/app';

import { Provider } from 'react-redux';
('react-redux');
import store from '../store/store';

export const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};
