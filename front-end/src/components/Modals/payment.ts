import styled from "styled-components";

export const ModalContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 4;

`

export const ModalWrapper = styled.div`
  max-width: 300px;
  max-height: 350px;
`

export const ModalBack = styled.div`
  background: white;
  height:100%;
  width:100%;
  border-radius: 15px;
  padding: 15px;
`
export const ModalHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${({theme}) => theme.colors.secondary};
  font-size: 1.2rem;

`

export const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: .8rem;
  justify-content: center;
  margin: 2rem 0 0 1rem;

  & > button {
    margin-left: 2rem;
  }
`;