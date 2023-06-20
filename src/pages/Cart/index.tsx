import { useForm } from 'react-hook-form'
import { AddressFields } from '../../components/Form/AddressFields'
import { HeaderForm } from '../../components/Form/HeaderForm'
import { ConfirmDelivery, deliveryFormValidationSchema } from '../../App'
import { zodResolver } from '@hookform/resolvers/zod'
import { setAddress } from '../../reducers/address/actions'
import { CartContainer, AddressFormContainer } from './styles'
import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { paymentMethods } from '../../assets/payments'
import { PaymentMethodInput } from './components/PaymentMethodsInput'

export function Cart() {
  const { colors } = useTheme()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ConfirmDelivery>({
    resolver: zodResolver(deliveryFormValidationSchema),
  })

  function onSubmit(data: ConfirmDelivery) {
    setAddress(data)
  }

  return (
    <CartContainer>
      <div>
        <AddressFormContainer>
          <HeaderForm
            title="Endereço de Entrega"
            subtitle="Informe o endereço onde deseja receber seu pedido"
            icon={<MapPinLine color={colors['brand-yellow-dark']} size={22} />}
          />
          <form onSubmit={handleSubmit(onSubmit)}>
            <AddressFields register={register} errors={errors} />
          </form>
        </AddressFormContainer>
        <div>
          <HeaderForm
            title="Pagamento"
            subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
            icon={<CurrencyDollar color={colors['brand-purple']} size={22} />}
          />
          {paymentMethods.map((payment) => (
            <PaymentMethodInput
              key={payment.label}
              icon={<payment.icon size={16} />}
              label={payment.label}
            />
          ))}
        </div>
      </div>
      <div>
        <p>ols</p>
      </div>
    </CartContainer>
  )
}
