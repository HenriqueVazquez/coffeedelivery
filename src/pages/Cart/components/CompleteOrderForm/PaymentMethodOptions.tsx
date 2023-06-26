import { PaymentMethodOptionsContainer } from './styles'

import { useFormContext } from 'react-hook-form'
import { RegularText } from '../../../../components/Typography'
import { PaymentMethodInput } from '../PaymentMethodsInput'
import { paymentMethods } from '../../../../assets/payments'

export function PaymentMethodOptions() {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  const paymentMethodError = errors?.paymentMethod?.message as string

  return (
    <PaymentMethodOptionsContainer>
      <div>
        {paymentMethods.map((payment) => (
          <PaymentMethodInput
            key={payment.id}
            id={String(payment.id)}
            label={payment.label}
            icon={payment.icon}
            value={payment.value}
            {...register('paymentMethod')}
          />
        ))}
      </div>
      {paymentMethodError && <RegularText>{paymentMethodError}</RegularText>}
    </PaymentMethodOptionsContainer>
  )
}
