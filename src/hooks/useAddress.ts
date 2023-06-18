import { useContext } from 'react'
import { AddressContext } from '../contexts/AddressContext'

export function useAddress() {
  return useContext(AddressContext)
}
