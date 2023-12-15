import styled from "styled-components";

export const ContainerSectionText = styled.main`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 10rem;
  justify-content: center;
  margin-top: 2rem;

  & > div > h2{ 
    font-size: 1.6rem;
    font-weight: 400;
  }

  & > div > p{
    width: 100%;
    font-size: 1rem;
  font-weight: 400;
  margin-right: 1rem;
  }

  & > div > img {
    margin: 2rem 0 0 2rem;
    animation: rotate 5s infinite ease-in-out;
  }

  @media (max-width: 750px) {
    grid-template-columns: 1fr;
    gap: 2.5rem;


  & > div > h2{
    margin: 0 2rem;
    font-size: 1.2rem;
  }

  & > div > p {
    margin-left: -1.3rem;
    font-size: .95rem;
  }

  & > div > img {
    margin: auto;
  }
  
}

  @keyframes rotate {
  0%{
    transform: rotateY(0);
  }

  50%{
    transform: rotateY(180deg);
  }

  100%{
    transform: rotateY(360deg);
  }
}
`

export const ContainerDivText = styled.div`
  margin: 2rem 0 0 5rem;
  display: grid;
  justify-content: flex-start;
`

export const ContainerSectionCard = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-left: 5rem;
  gap: 1.6rem;

  @media (max-width: 750px ) {
    display: grid;
    grid-template-columns: 1fr;
  }
  
`