/* eslint-disable no-undef */
import { useEffect, useState } from 'react'
import { useAddress } from '../../../hooks/useAddress'
import { Label, InputForm, FieldsContainer } from './styles'

import { FieldErrors, FieldValues } from 'react-hook-form'
import axios from 'axios'

import { AddressState } from '../../../interfaces/AddressState'

interface AddressFieldsProps<T extends FieldValues> {
  register: any
  errors: FieldErrors<T>
  setValue: any
}

export function AddressFields<T extends FieldValues>({
  register,
  errors,
  setValue,
}: AddressFieldsProps<T>) {
  const { address, setAddress } = useAddress()
  const [fetchedAddress, setFetchedAddress] = useState<AddressState>(
    {} as AddressState,
  )

  const [doFetch, setDoFetch] = useState<boolean>(false)

  const defaultData = {
    cep: '',
    street: '',
    number: '',
    complement: '',
    district: '',
    city: '',
    uf: '',
  }

  const fetchAddress = async (cep: string) => {
    try {
      setDoFetch(true)
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
      const data = response.data

      if (!data.erro && data) {
        setFetchedAddress({
          cep: data.cep,
          street: data.logradouro,
          number: '',
          complement: '',
          district: data.bairro,
          city: data.localidade,
          uf: data.uf,
        })
        setValue('street', data.logradouro)
        setValue('district', data.bairro)
        setValue('city', data.localidade)
        setValue('uf', data.uf)
      } else {
        setFetchedAddress(defaultData)
      }
    } catch (error) {
      setFetchedAddress(defaultData)
    }
  }

  useEffect(() => {
    setFetchedAddress(address)
  }, [address])

  useEffect(() => {
    if (fetchedAddress !== address && doFetch) {
      setDoFetch(false)
      setAddress(fetchedAddress)
    }
  }, [address, doFetch, fetchedAddress, setAddress])

  return (
    <FieldsContainer>
      <div className="row">
        <Label htmlFor="cep">
          <InputForm
            id="cep"
            name="cep"
            type="text"
            placeholder="CEP"
            defaultValue={address.cep}
            {...register('cep')}
            className="cep"
            error={
              typeof errors?.cep?.message === 'string'
                ? errors.cep.message
                : undefined
            }
            onBlur={(event: React.FocusEvent<HTMLInputElement>) => {
              const { value } = event.target
              fetchAddress(value)
            }}
          />
        </Label>
      </div>
      <div className="row">
        <Label htmlFor="street">
          <InputForm
            id="street"
            name="street"
            type="text"
            placeholder="Rua"
            {...register('street')}
            className="street"
            error={
              typeof errors?.street?.message === 'string'
                ? errors.street.message
                : undefined
            }
          />
        </Label>
      </div>

      <div className="row numberComplement">
        <Label className="labelNumber" htmlFor="number">
          <InputForm
            id="number"
            name="number"
            type="text"
            placeholder="Número"
            defaultValue={address.number}
            {...register('number')}
            className="number"
            error={
              typeof errors?.number?.message === 'string'
                ? errors.number.message
                : undefined
            }
          />
        </Label>
        <Label htmlFor="complement">
          <InputForm
            id="complement"
            name="complement"
            rightText="Opcional"
            type="text"
            placeholder="Complemento"
            defaultValue={address.complement}
            {...register('complement')}
            className="complement"
            error={
              typeof errors?.complement?.message === 'string'
                ? errors.complement.message
                : undefined
            }
          />
        </Label>
      </div>
      <div className="row row3">
        <Label className="districtLabel" htmlFor="district">
          <InputForm
            id="district"
            name="district"
            type="text"
            placeholder="Bairro"
            {...register('district')}
            className="district"
            error={
              typeof errors?.district?.message === 'string'
                ? errors.district.message
                : undefined
            }
          />
        </Label>
        <Label htmlFor="city">
          <InputForm
            id="city"
            name="city"
            type="text"
            placeholder="Cidade"
            {...register('city')}
            className="city"
            error={
              typeof errors?.city?.message === 'string'
                ? errors.city.message
                : undefined
            }
          />
        </Label>
        <Label className="ufLabel" htmlFor="uf">
          <InputForm
            id="uf"
            name="uf"
            type="text"
            placeholder="UF"
            className="uf"
            {...register('uf')}
            error={
              typeof errors?.uf?.message === 'string'
                ? errors.uf.message
                : undefined
            }
          />
        </Label>
      </div>
    </FieldsContainer>
  )
}
