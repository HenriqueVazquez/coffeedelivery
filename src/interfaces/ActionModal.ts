import { ActionTypeModal } from '../reducers/modal/actions'

export interface ShowMOdal {
  type: ActionTypeModal.SHOW_MODAL
}

export interface HideModal {
  type: ActionTypeModal.HIDE_MODAL
}
