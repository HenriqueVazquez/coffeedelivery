import { AddressState } from '../../interfaces/AddressState'
import { AddressAction } from '../../types/AddressAction'
import { ActionTypeAddress } from './actions'

export function addressReducer(
  address: AddressState,
  action: AddressAction,
): AddressState {
  switch (action.type) {
    case ActionTypeAddress.SET_ADDRESS: {
      const newAddress = {
        cep: action.payload.address.cep,
        street: action.payload.address.street,
        number: action.payload.address.number,
        complement: action.payload.address.complement,
        district: action.payload.address.district,
        city: action.payload.address.city,
        uf: action.payload.address.uf,
      }

      return newAddress
    }

    case ActionTypeAddress.CLEAR_ADDRESS: {
      const clearAddress = {
        cep: '',
        street: '',
        number: '',
        complement: '',
        district: '',
        city: '',
        uf: '',
      }

      return clearAddress
    }

    default: {
      return address
    }
  }
}
