import { ActionTypeModal } from './actions'

export interface Action {
  type: ActionTypeModal
}

const initialState = false

export function modalReducer(state = initialState, action: Action) {
  switch (action.type) {
    case ActionTypeModal.SHOW_MODAL:
      return true
    case ActionTypeModal.HIDE_MODAL:
      return false
    default:
      return state
  }
}
