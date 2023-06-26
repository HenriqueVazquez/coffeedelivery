import { Action } from '../../interfaces/ActionModal'
import { ActionTypeModal } from './actions'

const initialState = false

export function modalReducer(state = initialState, action: Action) {
  switch (action.type) {
    case ActionTypeModal.SHOW_MODAL:
      return true
    case ActionTypeModal.HIDE_MODAL:
      return false
    case ActionTypeModal.CLEAR_MODAL:
      return initialState
    default:
      return state
  }
}
