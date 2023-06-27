import { createContext, useReducer, ReactNode } from 'react'
import { modalReducer } from '../reducers/modal/reducer'
import * as actions from '../reducers/modal/actions'
import { ModalContextType } from '../interfaces/ModalContextType'

export const ModalContext = createContext({} as ModalContextType)

interface ModalContextProviderProps {
  children: ReactNode
}

interface ModalState {
  showModal: boolean
  resetFunction?: () => void
}

const initialState: ModalState = {
  showModal: false,
  resetFunction: undefined,
}

export function ModalContextProvider({ children }: ModalContextProviderProps) {
  const [state, dispatch] = useReducer(modalReducer, initialState)

  const openModal = () => {
    dispatch(actions.showModal())
  }

  const closeModal = () => {
    dispatch(actions.hideModal())
  }

  const clearModal = () => {
    dispatch(actions.clearModal())
  }

  const setResetFunction = (resetFn: () => void) => {
    dispatch(actions.setResetFunction(resetFn))
  }

  const value = {
    showModal: state.showModal,
    openModal,
    closeModal,
    clearModal,
    setResetFunction,
  }

  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
}
