'use client';

import { Header } from '@/components/header/Header';
import { Container, SectionWelcome } from '../register/style';
import FormLogin from './FormLogin';

const Login = () => {
  return (
    <>
      <Header />
      <Container>
        <SectionWelcome>
          <h1>Welcome back</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            dolores debitis labore ex nihil consequatur vel accusamus tempore
            eius. Quia recusandae voluptas enim error commodi et id ullam omnis
            asperiores?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            doloribus, expedita cum quis porro saepe, modi quos vel id earum
            amet dolor est accusantium ad ipsa hic impedit maxime ab. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Nobis dolor hic
            sapiente eos minus error reiciendis id at fugit maxime quae, odit,
            molestias et blanditiis sed odio nihil dignissimos. Ea.
          </p>
        </SectionWelcome>
        <FormLogin />
      </Container>
    </>
  );
};

export default Login;
