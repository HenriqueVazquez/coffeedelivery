import styled from 'styled-components'
import Modal from 'react-modal'

Modal.setAppElement('#root')

export const ModalContainer = styled.div``

export const StyledModal = styled(Modal)`
  width: 40rem;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${(props) => props.theme.colors['base-background']};
  box-shadow: none;
  gap: 1rem;
  padding: 1rem;
  border-radius: 5px;
  padding-bottom: 1rem;
  max-height: 80vh;
  overflow-y: auto;
  overflow-x: hidden;

  @media (max-width: 1360px) {
    padding-top: 0;
  }

  @media (max-width: 610px) {
    width: 80%;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.1rem;

  @media (max-width: 610px) {
    display: grid;
    grid-template-columns: 1fr;
  }

  .registerButtonContainer {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const CloseButton = styled.button`
  position: absolute;
  top: calc(0.1rem / 2);
  right: calc(-0.1rem / 2);
  background: none;
  border: 0;
  border-radius: 5px;

  svg {
    color: ${(props) => props.theme.colors['base-error-button']};
    &:hover {
      color: ${(props) => props.theme.colors['base-error']};
    }
  }

  @media (max-width: 610px) {
    position: static;
    margin: 1rem;

    svg {
      width: 30px;
      height: 30px;
    }
  }
`

export const RegisterButton = styled.button`
  width: 6.25rem;
  background: ${(props) => props.theme.colors['brand-purple-dark']};
  color: ${(props) => props.theme.colors['base-white']};
  border-radius: 10px;
  padding: 0.25rem 0 0.25rem 0;
  margin-top: 1rem;

  :hover {
    background: ${(props) => props.theme.colors['brand-purple']};
    color: ${(props) => props.theme.colors['base-input']};
  }
`
