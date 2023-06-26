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
    city: '',
    uf: '',
  }

  const [address, dispatch] = useReducer(
    addressReducer,
    initialState,
    (initialState) => {
      const storedAddress = localStorage.getItem(Address)
      console.log('storedAddress')
      console.log(storedAddress)

      if (storedAddress) {
        return JSON.parse(storedAddress)
      }

      return initialState
    },
  )

  function setAddress(newAddress: AddressState) {
    console.log('newAddress')
    console.log(newAddress)
    dispatch(actions.setAddress(newAddress))
  }

  function clearAddress() {
    dispatch(actions.clearAddress())
  }

  // Salva o endereço no localStorage sempre que houver uma mudança
  useEffect(() => {
    console.log('localStorage')
    console.log(address)
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
