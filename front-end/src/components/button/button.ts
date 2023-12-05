import styled from "styled-components";
import { theme } from '../../styles/theme';

export const Container = styled.button`
    text-align: center;
    border: none;
    width: 10rem;
    padding: 1rem;
    font-size: 1rem;
    margin:  5rem 0;
    border-radius: 5rem;
    background-color: ${({theme}) => theme.colors.secondary};
    color: ${({theme}) => theme.colors.primary};
    cursor: pointer;
    transition: .5s ease-in-out;

    &:hover{
      background-color: ${({theme}) => theme.colors.primary};
      color: ${({theme}) => theme.colors.backgroundColor};
    }
`