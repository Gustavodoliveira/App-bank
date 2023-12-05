'use client';

import { Header } from '@/components/header/Header';
import { Container, ContainerDivText } from './home';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../assets/cifrao-lado-esquerdo-com-fundo-branco-removebg-preview.png';
import Button from '@/components/button/Button';
import { MouseEvent } from 'react';
import ButtonComponent from '@/components/button/Button';

export default function Home() {
  return (
    <Container>
      <ContainerDivText>
        <h2>Create your account with our bank</h2>

        <p>
          Good morning everybody! Today, we are excited to present the new
          App-Bank banking application. This app is designed to make your
          financial life more simple, safe and convenient.
        </p>
        <p>
          Our banking app is an extension of your bank branch, accessible 24
          hours a day, 7 days a week. Allows you to perform a wide range of
          banking operations from the comfort of your home or wherever that you
          are.
        </p>
        <Link href="/register">
          <ButtonComponent
            handleClick={() => console.log('ola')}
            text={'hello world'}
          />
        </Link>
      </ContainerDivText>
      <div>
        <Image src={logo} width={250} height={250} alt="money" />
      </div>
    </Container>
  );
}
