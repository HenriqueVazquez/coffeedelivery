import { ActionTypeAddress } from '../../enum/ActionTypeAddress'
import {
  ClearAddressAction,
  SetAddressAction,
} from '../../interfaces/ActionAddress'
import { AddressState } from '../../interfaces/AddressState'

export function setAddress(address: AddressState): SetAddressAction {
  return {
    type: ActionTypeAddress.SET_ADDRESS,
    payload: {
      address,
    },
  }
}

export function clearAddress(): ClearAddressAction {
  return {
    type: ActionTypeAddress.CLEAR_ADDRESS,
  }
}

export { ActionTypeAddress }
