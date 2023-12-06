import styled from "styled-components";

export const ContainerCard = styled.div`
  margin: 2rem 0;
  padding: 1rem;
  height: 15rem;
  border-radius: 2rem;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.39);
  max-width: 12rem;
  backface-visibility: hidden;
  transition: .5s ease-in-out;

  &:hover {
  transform: translateY(-1rem);
  }

`