import { createContext, useEffect, useReducer } from 'react'

import * as actions from '../reducers/address/actions'
import { addressReducer } from '../reducers/address/reducer'
import { AddressState } from '../interfaces/AddressState'
import { AddressContextType } from '../interfaces/AddressContextType'
import { AddressContextProviderProps } from '../interfaces/AddressContextProviderProps'

export const AddressContext = createContext({} as AddressContextType)

export function AddressContextProvider({
  children,
}: AddressContextProviderProps) {
  const Address = '@CoffeeDelivery:address-1.0.0'

  const initialState = {
    cep: '',
    street: '',
    number: '',
    complement: '',
    district: '',
    city: 'São Paulo',
    uf: 'SP',
  }

  const [address, dispatch] = useReducer(
    addressReducer,
    initialState,
    (initialState) => {
      const storedAddress = localStorage.getItem(Address)

      if (storedAddress) {
        return JSON.parse(storedAddress)
      }

      return initialState
    },
  )

  function setAddress(newAddress: AddressState) {
    dispatch(actions.setAddress(newAddress))
  }

  function clearAddress() {
    dispatch(actions.clearAddress())
  }

  // Salva o endereço no localStorage sempre que houver uma mudança
  useEffect(() => {
    localStorage.setItem(Address, JSON.stringify(address))
  }, [address])

  return (
    <AddressContext.Provider
      value={{
        address,
        setAddress,
        clearAddress,
      }}
    >
      {children}
    </AddressContext.Provider>
  )
}
