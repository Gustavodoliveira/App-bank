'use client';
import styled from "styled-components";
import backImg from '@/assets/41dd319e36d7bccc1bdbd00c35dc7b92.svg';



export const Container = styled.main`
  display: grid;
  grid-template-areas: "welcome" "register";
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  background-image: url(${backImg.src});
  height: 90vh;
 

  .welcome{
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
  }

  

  
`

export const FormRegister = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 7rem 0 0 0;


  .btn-register{
    margin-right: -15rem;
  }


`