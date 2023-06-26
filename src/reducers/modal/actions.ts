import { ActionTypeModal } from '../../enum/ActionTypeModal'

export function showModal() {
  return {
    type: ActionTypeModal.SHOW_MODAL,
  }
}

export function hideModal() {
  return {
    type: ActionTypeModal.HIDE_MODAL,
  }
}

export function clearModal() {
  return {
    type: ActionTypeModal.CLEAR_MODAL,
  }
}

export { ActionTypeModal }
