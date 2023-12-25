import styled from "styled-components";

export const ContainerProfile = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-flow: row;
  gap: 3rem;

  #editAccount {
    margin: 2rem 0 0 4rem;
    h3 {
      margin-bottom: 2rem;
      font-size: 1rem;
      text-align: center;
    }
  }


  @media (max-width: 750px) {
    display: grid;
    grid-template-columns: 1fr;

  }

`

export const SectionAccount = styled.section`

  h2{
    margin: 3rem 0;
    text-align: center;
    font-size: 1.2rem;
  }

  p{
    text-align: justify;
    margin: 2.5rem 2rem;
  }

  button{
    margin-left: 10rem;
  }

`

export const FormUpdate = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  grid-auto-flow: row;

  @media (max-width: 750px) {
    display: grid;
    grid-template-columns: 1fr;
    margin-left: 15%;

  }

  input{
    border: 1px solid black;
  }
`