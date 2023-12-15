import styled from "styled-components";
import backImg from '@/assets/41dd319e36d7bccc1bdbd00c35dc7b92.svg';


export const Container = styled.main`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-image: url(${backImg.src});
  padding: 7rem 0;
`;

export const SectionWelcome= styled.section``;