import styled from "styled-components";

export const ContainerCard = styled.div`
  margin: 2rem 0;
  padding: 1rem;
  background-color: ${({theme}) => theme.colors.primary};
  border-radius: 1rem;
  max-width: 12rem;
  box-shadow: 5px 5px 4px rgba(0, 0, 0, 0.39);
  backface-visibility: hidden;
  transition: all .5s ease-in;
  

  &:hover {
  transform: translateY(-0.7rem);
  }

  & > h3 {
    padding: 1rem;
    
    text-align: center;
    font-family: inherit;
    font-size: 1.2rem;
    font-weight: 400;
    border-bottom: 1px solid ${({theme}) => theme.colors.secondary};
  }

  & > p {
    padding: 1rem;
    font-size: .8rem;
    font-family: inherit;
    font-weight: 200;
  }

  & > ul {
    padding: 1rem;
  }

`
