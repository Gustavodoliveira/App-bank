import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { GlobalStyle } from '@/styles/GlobalStyle';
import Providers from './_providers';
import { Header } from '@/components/header/Header';
import { Footer } from '@/components/footer/Footer';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600'],
});

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
      <body className={poppins.className}>
        <Providers>
          <Header />
          <GlobalStyle />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
