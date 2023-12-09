
'use client'
import { createGlobalStyle } from "styled-components";
import { Poppins } from 'next/font/google';

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