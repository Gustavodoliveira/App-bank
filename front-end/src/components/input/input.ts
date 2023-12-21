import styled from "styled-components";

export const InputStyled = styled.input`
      border: none;
      border-radius: .2rem;
      padding: .3rem .4rem;

      &[name='Modal'] {
        border: 1px solid black;
      }

      &:focus{
        outline: none;
      }

      
      &::placeholder {
        font-size: .8rem;
        padding: .5rem;

      }
    
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  
  .input-icon {
      color: ${({theme}) => theme.colors.primary};
      font-size: 1.2rem;
      font-weight: lighter;

    }
`

export const Label = styled.label`
font-weight: bold;
      font-size: .8rem;
      padding: .5rem;
`
