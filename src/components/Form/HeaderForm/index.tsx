import { HeaderContainer, TitleModal } from './styles'
import { RegularText } from '../../Typography'
import { HeaderFormProps } from '../../../interfaces/HeaderFormProps'

export function HeaderForm({ title, subtitle, icon }: HeaderFormProps) {
  return (
    <HeaderContainer>
      {icon}
      <TitleModal size="m" color="subtitle">
        {title}
      </TitleModal>
      <RegularText size="s" color="text">
        {subtitle}
      </RegularText>
    </HeaderContainer>
  )
}
