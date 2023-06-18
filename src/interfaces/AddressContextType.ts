import { AddressState } from '../interfaces/AddressState'

export interface AddressContextType {
  address: AddressState
  setAddress: (address: AddressState) => void
  clearAddress: () => void
}
