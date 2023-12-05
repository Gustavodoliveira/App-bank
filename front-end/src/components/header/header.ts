'use client'

import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5rem ;
  font-weight: 400;
  border-bottom: .1rem solid ${({theme}) => theme.colors.secondary};
  position: relative;

    .menu{
  display: none;
  cursor: pointer;
}

`

export const NavContainer = styled.nav`
  display: flex;
  gap: 2rem;
  font-size: 1.1rem;

  & > ul {
    display: flex;
    gap: 2rem;
    list-style: none;

    & > li {
      position: relative;
    }
    
       
    }

    .after-border-bottom{
      &::after{
        content: "";
        width: 0%;
        height: 2px;
        background-color: ${({theme}) => theme.colors.primary};
        position: absolute;
        border-radius: .3rem;
        bottom: 0;
        left: 0;
        transition: .5s ease-in-out;
}

&:hover::after{
        width: 100%;
    }
}

  @media (max-width:700px) {
      .menu{
        display: block;
        z-index: 2;
      }

      & > ul {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    text-align: center;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    width: 100vw;
    height: 0vh;
    padding: 0;
    margin: 0;
    -webkit-backface-visibility: hidden;
    overflow-x: auto;
    visibility: visible;
    transition:  .5s ease-in-out;
  }

  nav > li > a > li {
    padding: 1rem;
  }

  .active{
    visibility: visible;
    background-color: ${({theme}) => theme.colors.secondary};
    height: 100vh;
    z-index: 1;
  }
}
`