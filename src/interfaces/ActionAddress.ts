import { ActionTypeAddress } from '../enum/ActionTypeAddress'
import { AddressState } from './AddressState'

export interface SetAddressAction {
  type: ActionTypeAddress.SET_ADDRESS
  payload: {
    address: AddressState
  }
}

export interface ClearAddressAction {
  type: ActionTypeAddress.CLEAR_ADDRESS
}
