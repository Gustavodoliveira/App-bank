import styled from "styled-components";


export const Container = styled.main`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  position: relative;

  @media (max-width: 750px) {
    grid-template-columns: 1fr;
  }

`

export const PaymentSection = styled.section`
  margin: 2rem 0;


  & > h2{
    text-align: center;
    font-size: 1.2rem;
    font-weight: 500;
    letter-spacing: .1rem;
  }

  & > p{
    font-size: .8rem;
    font-weight: 400;
    text-align: justify;
    margin: 2rem 4rem
  }

  & > button{
    margin-left: 10rem;
  }

`;

export const DepositSection = styled.section`
margin: 2rem 0;


& > h2,h3{
    text-align: center;
    font-size: 1.2rem;
    font-weight: 500;
    letter-spacing: .1rem;
  }

& > p{
    font-size: .8rem;
    font-weight: 400;
    text-align: justify;
    margin: 2rem 4rem
  }

  & > button{
    margin-left: 10rem;
  }
`;