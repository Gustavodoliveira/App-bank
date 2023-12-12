import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  background-color: ${({theme}) => theme.colors.primary};
  color: ${({theme}) => theme.colors.backgroundColor};
  font-size: 1rem;
  letter-spacing: .1rem;
`;

export const SocialMedias = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 1rem ;

  & > a {
    color: ${({theme}) => theme.colors.backgroundColor};
    transition: all .5s ease-in-out;
    margin: .3rem 0 0 0 ;

    & > span {
      margin-left: .4rem;
    }

    &:hover{
      opacity: .3;
    }
  }
`