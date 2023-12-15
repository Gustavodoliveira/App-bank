'use client';
import styled from "styled-components";
import backImg from '@/assets/41dd319e36d7bccc1bdbd00c35dc7b92.svg';



export const Container = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-bottom: 6rem;
  grid-auto-flow: row;
  gap: 4rem;
  background-image: url(${backImg.src});
  height: auto;
 
  @media (max-width: 750px) {
    display: grid;
    grid-template-columns: 1fr;

  }
    
`

export const SectionWelcome= styled.section`
  margin: 7rem 0 0 0;

  & > h1 {
      margin-bottom: 2rem;
      font-size: 1.5rem;
      font-weight: 300;
      text-align: center;
    }

    & > p {
      font-weight: 500;
      font-size: .8rem;
      letter-spacing: .1rem;
      margin: 0 5rem;
    }

    @media (max-width: 750px) {
      
      & > h1 {
        font-size: 1rem;
      }
    }
`;