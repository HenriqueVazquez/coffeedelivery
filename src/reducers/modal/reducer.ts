import { Action } from '../../interfaces/ActionModal'
import { ActionTypeModal } from './actions'

interface ModalState {
  showModal: boolean
  resetFunction?: () => void // Função a ser executada no clear_modal
}

const initialState: ModalState = {
  showModal: false,
}

export function modalReducer(state = initialState, action: Action): ModalState {
  switch (action.type) {
    case ActionTypeModal.SHOW_MODAL:
      return {
        ...state,
        showModal: true,
      }
    case ActionTypeModal.HIDE_MODAL:
      return {
        ...state,
        showModal: false,
      }
    case ActionTypeModal.CLEAR_MODAL:
      if (state.resetFunction) {
        state.resetFunction() // Executa a função armazenada
      }
      return {
        ...state,
        showModal: initialState.showModal,
      }
    default:
      return state
  }
}
