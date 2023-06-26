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

export function DeliveryModal() {
  const { colors } = useTheme()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ConfirmDelivery>({
    resolver: zodResolver(deliveryFormValidationSchema),
  })

  const { closeModal, showModal } = useModal()
  const { setAddress } = useAddress()

  function onSubmit(data: ConfirmDelivery) {
    console.log('data aqui')
    console.log(data.district)
    setAddress(data)
    closeModal()
  }

  function handleCloseModal() {
    closeModal()
  }

  return (
    <ModalContainer>
      <StyledModal isOpen={showModal} onRequestClose={closeModal}>
        <HeaderForm
          title="Endereço de Entrega"
          subtitle="Informe o endereço onde deseja receber seu pedido"
          icon={<MapPinLine color={colors['brand-yellow-dark']} size={22} />}
        />
        <Form onSubmit={handleSubmit(onSubmit)}>
          <AddressFields register={register} errors={errors} />
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
