
'use client'
import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body{
  padding: 0;
  margin: 0;
  box-sizing: content-box;
  font-size: 62.5%;
  font-weight: 300;
}

a{
  text-decoration: none;
  color: black;
}

.h2-formatted{
  text-align: center;
  font-size: 1.6rem;
}
  
.centralize{
  display: flex;
  justify-content: center;
}

`;

export const FormController = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 7rem 0 0 0;


  .btn-register{
    margin-right: -15rem;
  }


`