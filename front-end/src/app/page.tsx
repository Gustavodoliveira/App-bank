'use client';

import {
  ContainerDivText,
  ContainerSectionCard,
  ContainerSectionText,
} from './home';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../assets/cifrao-lado-esquerdo-com-fundo-branco-removebg-preview.png';
import ButtonComponent from '@/components/button/Button';
import { Card } from '@/components/card/Card';
import {
  AiFillMoneyCollect,
  AiFillCustomerService,
  AiFillSecurityScan,
} from 'react-icons/ai';
import store from '@/store/store';
import { Header } from '@/components/header/Header';

export default function Home() {
  const userAuth = store.getState().isLogged;

  return (
    <>
      <Header />
      <ContainerSectionText>
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
            banking operations from the comfort of your home or wherever that
            you are.
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
      </ContainerSectionText>
      <h2 className="h2-formatted">Our best resources aimed at you</h2>
      <ContainerSectionCard>
        <Card
          title="Investments"
          content="In our bank you have support in your investments by our team of consultants"
          list={{
            improvementA: 'Your money yielding 100% ',
            improvementB: 'Transaction alerts',
          }}
          Icon={AiFillMoneyCollect}
        />
        <Card
          title="Customer support"
          content="We are here to help"
          list={{
            improvementA: 'Live chat',
            improvementB: 'E-mail',
            improvementC: 'Phone',
          }}
          Icon={AiFillCustomerService}
        />
        <Card
          title="Security"
          content="We prioritize the security of your transaction "
          list={{
            improvementA: 'End-to-end encryption ',
            improvementB: 'Suspicious activity notifications',
          }}
          Icon={AiFillSecurityScan}
        />
      </ContainerSectionCard>
      {/*TODO: SECTION COMMENTS */}
    </>
  );
}
