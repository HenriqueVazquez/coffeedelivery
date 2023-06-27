/* eslint-disable no-unused-vars */

import { SelectedCoffees } from './components/SelectedCoffees'

import { useForm, FormProvider } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'
import { CompleteOrderContainer } from './styles'
import { CompleteOrderForm } from './components/CompleteOrderForm'
import { useAddress } from '../../hooks/useAddress'
import { confirmOrderFormValidationSchema } from '../../types/ConfirmOrder'
import { useModal } from '../../hooks/useModal'

export type OrderData = zod.infer<typeof confirmOrderFormValidationSchema>

type ConfirmOrderFormData = OrderData

export function Cart() {
  const { address } = useAddress()

  const defaultValues = {
    cep: address.cep,
    street: address.street,
    number: address.number,
    complement: address.complement,
    district: address.district,
    city: address.city,
    uf: address.uf,
    paymentMethod: undefined,
  }

  const confirmOrderForm = useForm<ConfirmOrderFormData>({
    resolver: zodResolver(confirmOrderFormValidationSchema),
    defaultValues,
  })

  const { handleSubmit } = confirmOrderForm

  const navigate = useNavigate()
  const { resetCart } = useCart()
  const { clearModal } = useModal()

  const { clearAddress } = useAddress()

  function handleConfirmOrder(data: ConfirmOrderFormData) {
    navigate('/success', {
      state: data,
    })

    clearAddress()
    clearModal()
    resetCart()
  }

  return (
    <FormProvider {...confirmOrderForm}>
      <CompleteOrderContainer
        className="container"
        onSubmit={handleSubmit(handleConfirmOrder)}
      >
        <CompleteOrderForm />
        <SelectedCoffees />
      </CompleteOrderContainer>
    </FormProvider>
  )
}
