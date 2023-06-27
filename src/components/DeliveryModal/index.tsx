import { useModal } from '../../hooks/useModal'
import {
  Form,
  ModalContainer,
  StyledModal,
  CloseButton,
  RegisterButton,
} from './styles'

import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { AddressFields } from '../Form/AddressFields'
import { HeaderForm } from '../Form/HeaderForm'
import { MapPinLine, XCircle } from 'phosphor-react'
import { useAddress } from '../../hooks/useAddress'
import { useTheme } from 'styled-components'
import {
  ConfirmDelivery,
  deliveryFormValidationSchema,
} from '../../types/ConfirmDelivery'
import { useEffect, useMemo } from 'react'

export function DeliveryModal() {
  const { colors } = useTheme()
  const { address } = useAddress()

  const defaultValues = useMemo(
    () => ({
      cep: address.cep,
      street: address.street,
      number: address.number,
      complement: address.complement,
      district: address.district,
      city: address.city,
      uf: address.uf,
    }),
    [address],
  )

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
  } = useForm<ConfirmDelivery>({
    resolver: zodResolver(deliveryFormValidationSchema),
    defaultValues,
  })

  const { closeModal, showModal, setResetFunction } = useModal()
  const { setAddress } = useAddress()

  function onSubmit(data: ConfirmDelivery) {
    setAddress(data)
    setResetFunction(reset)
    closeModal()
  }

  function handleCloseModal() {
    closeModal()
  }

  useEffect(() => {
    reset(defaultValues)
  }, [address, defaultValues, reset])

  return (
    <ModalContainer>
      <StyledModal isOpen={showModal} onRequestClose={closeModal}>
        <HeaderForm
          title="Endereço de Entrega"
          subtitle="Informe o endereço onde deseja receber seu pedido"
          icon={<MapPinLine color={colors['brand-yellow-dark']} size={22} />}
        />
        <Form onSubmit={handleSubmit(onSubmit)}>
          <AddressFields
            register={register}
            errors={errors}
            setValue={setValue}
          />
          <div className="registerButtonContainer">
            <RegisterButton type="submit">Cadastrar</RegisterButton>
          </div>
          <CloseButton onClick={handleCloseModal}>
            <XCircle size={25} weight="fill" />
          </CloseButton>
        </Form>
      </StyledModal>
    </ModalContainer>
  )
}
