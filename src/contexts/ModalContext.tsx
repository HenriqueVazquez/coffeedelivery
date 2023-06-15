import { createContext, useReducer, ReactNode } from 'react'
import { modalReducer } from '../reducers/modal/reducer'
import * as actions from '../reducers/modal/actions'
import { ModalContextType } from '../interfaces/ModalContextType'

export const ModalContext = createContext({} as ModalContextType)

interface ModalContextProviderProps {
  children: ReactNode
}

export function ModalContextProvider({ children }: ModalContextProviderProps) {
  const [showModal, dispatch] = useReducer(modalReducer, false)

  const openModal = () => {
    dispatch(actions.showModal())
  }

  const closeModal = () => {
    dispatch(actions.hideModal())
  }

  /* useEffect(() => {
    // Lógica para abrir ou fechar o modal
  }, [showModal]) */

  const value = {
    showModal,
    openModal,
    closeModal,
  }

  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
}
