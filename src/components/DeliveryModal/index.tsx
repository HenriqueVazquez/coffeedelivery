import { useModal } from '../../hooks/useModal'
import {
  Form,
  ModalContainer,
  StyledModal,
  CloseButton,
  RegisterButton,
} from './styles'

import { useForm } from 'react-hook-form'
import { ConfirmDelivery, deliveryFormValidationSchema } from '../../App'
import { zodResolver } from '@hookform/resolvers/zod'
import { AddressFields } from '../Form/AddressFields'
import { HeaderForm } from '../Form/HeaderForm'
import { XCircle } from 'phosphor-react'

export function DeliveryModal() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ConfirmDelivery>({
    resolver: zodResolver(deliveryFormValidationSchema),
  })

  const { closeModal, showModal } = useModal()

  function onSubmit(data: ConfirmDelivery) {
    console.log(data)
    closeModal()
  }

  function handleCloseModal() {
    reset()
    closeModal()
  }

  return (
    <ModalContainer>
      <StyledModal isOpen={showModal} onRequestClose={closeModal}>
        <HeaderForm />
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