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
  

`

export const ModalWrapper = styled.div`
  width: 400px;
  height: 400px;
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