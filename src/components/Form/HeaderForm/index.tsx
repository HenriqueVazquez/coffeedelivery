import { MapPinLine } from 'phosphor-react'
import { HeaderContainer, TitleModal } from './styles'
import { RegularText } from '../../Typography'

export function HeaderForm() {
  return (
    <HeaderContainer>
      <MapPinLine size={22} weight="bold" />
      <TitleModal size="m" color="subtitle">
        Endereço de Entrega
      </TitleModal>
      <RegularText size="s" color="text">
        Informe o endereço onde deseja receber seu pedido
      </RegularText>
    </HeaderContainer>
  )
}
