'use client';

import { Container, SectionWelcome } from './style';
import FormRegisterWrapper from './FormRegisterWrapper';
import dynamic from 'next/dynamic';

const Register = () => {
  const HeaderNoSSR = dynamic(() => import('../../components/header/Header'));
  return (
    <>
      <HeaderNoSSR />
      <Container>
        <SectionWelcome>
          <h1>Create your account on our app</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore
            impedit obcaecati adipisci ullam, libero facere ducimus temporibus
            veritatis dolorem quos veniam praesentium, voluptates dolor,
            distinctio deserunt natus! Illum, itaque quasi!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde culpa
            accusantium vero, molestiae cumque architecto nemo tenetur
            perspiciatis possimus, error vitae aperiam. Quaerat amet commodi
            repellendus quas nemo obcaecati sequi.
          </p>
        </SectionWelcome>
        <FormRegisterWrapper />
      </Container>
    </>
  );
};

export default Register;
