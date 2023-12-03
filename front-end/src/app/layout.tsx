import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { GlobalStyle } from '@/styles/GlobalStyle';
import Providers from './_providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'App-bank',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Providers>
          <GlobalStyle />
          {children}
        </Providers>
      </body>
    </html>
  );
}
