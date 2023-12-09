import styled from "styled-components";

export const ContainerCard = styled.div`
  margin: 2rem 0;
  padding: 1rem;
  background-color: ${({theme}) => theme.colors.primary};
  border-radius: 1rem;
  max-width: 15rem;
  max-height: 15rem;
  box-shadow: 5px 5px 4px rgba(0, 0, 0, 0.39);
  backface-visibility: hidden;
  transition: all .5s ease-in;
  position: relative;
  

  &:hover {
  transform: translateY(-0.7rem);
  }

`
export const ContainerTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    font-size: 1rem;
    border-bottom: 1px solid ${({theme}) => theme.colors.secondary};
    letter-spacing: .1rem;

`

export const ContainerContent = styled.div`
display: grid;
grid-template-columns: 1fr;
text-align: center;

& > h4 {
  font-size: .8rem;
}

 & > ul {
  list-style: none;
  font-size: .8rem;
  text-align: start;

  & > li:not(:first-child) {
    margin-top: .8rem;
  }
 }
`