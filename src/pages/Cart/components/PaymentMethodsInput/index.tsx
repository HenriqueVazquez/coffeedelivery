import { IconProps } from 'phosphor-react'
import { PaymentMethodContainer, ContentContainer } from './styles'
import {
  forwardRef,
  ForwardRefExoticComponent,
  InputHTMLAttributes,
  RefAttributes,
} from 'react'

type PaymentMethodInputProps = InputHTMLAttributes<HTMLInputElement> & {
  icon: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>
  label: string
}

export const PaymentMethodInput = forwardRef<
  HTMLInputElement,
  PaymentMethodInputProps
>(({ id, icon: Icon, label, ...props }, ref) => {
  return (
    <PaymentMethodContainer>
      <input id={id} type="radio" {...props} name="paymentMethod" ref={ref} />
      <label htmlFor={id}>
        <ContentContainer>
          <Icon size={16} />
          {label}
        </ContentContainer>
      </label>
    </PaymentMethodContainer>
  )
})

PaymentMethodInput.displayName = 'PaymentMethodInput'
