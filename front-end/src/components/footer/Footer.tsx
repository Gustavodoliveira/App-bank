'use client';
import { FooterContainer, SocialMedias } from './footer';
import Link from 'next/link';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

export const Footer = () => {
  return (
    <FooterContainer>
      <SocialMedias>
        <Link href="https://github.com/Gustavodoliveira">
          <AiFillGithub />
          <span>GitHub</span>
        </Link>
        <Link href="/">
          <AiFillLinkedin /> <span>Linkedin</span>
        </Link>
      </SocialMedias>
      <h4>Development by Gustavo 2023 </h4>
    </FooterContainer>
  );
};
