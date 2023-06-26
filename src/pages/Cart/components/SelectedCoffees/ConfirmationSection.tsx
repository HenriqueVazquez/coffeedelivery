import { Button } from '../../../../components/Button'
import { RegularText } from '../../../../components/Typography'
import { useCart } from '../../../../hooks/useCart'

import { FormatMonetaryValue } from '../../../../utils/FormatMonetaryValue'

import { ConfirmationSectionContainer } from './styles'

export function ConfirmationSection() {
  const { cartItemsTotal, cartQuantity } = useCart()
  const DELIVERY_PRICE = 3.5 + cartQuantity
  const cartTotal = DELIVERY_PRICE + cartItemsTotal

  const formattedItemsTotal = FormatMonetaryValue(cartItemsTotal)
  const formattedDeliveryPrice = FormatMonetaryValue(DELIVERY_PRICE)
  const formattedCartTotal = FormatMonetaryValue(cartTotal)

  return (
    <ConfirmationSectionContainer>
      <div>
        <RegularText size="s">Total de itens</RegularText>
        <RegularText size="s">R$ {formattedItemsTotal}</RegularText>
      </div>
      <div>
        <RegularText size="s">Entrega</RegularText>
        <RegularText size="s">R$ {formattedDeliveryPrice}</RegularText>
      </div>
      <div>
        <RegularText weight="700" color="subtitle" size="l">
          Total
        </RegularText>
        <RegularText weight="700" color="subtitle" size="l">
          R$ {formattedCartTotal}
        </RegularText>
      </div>

      <Button
        text="Confirmar pedido"
        disabled={cartQuantity <= 0}
        type="submit"
      />
    </ConfirmationSectionContainer>
  )
}
