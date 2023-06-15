import { ActionTypeCart } from '../../enum/ActionTypeCart'
import {
  AddCoffeeAction,
  ChangeCartItemQuantityAction,
  RemoveCartItemAction,
  ResetCartAction,
} from '../../interfaces/ActionCart'
import { CartItem } from '../../interfaces/CartItem'

export function addCoffee(coffee: CartItem): AddCoffeeAction {
  return {
    type: ActionTypeCart.ADD_COFFEE,
    payload: {
      coffee,
    },
  }
}

export function changeCartItemQuantity(
  cartItemId: number,
  type: 'increase' | 'decrease',
): ChangeCartItemQuantityAction {
  return {
    type: ActionTypeCart.CHANGE_CART_ITEM_QUANTITY,
    payload: {
      cartItemId,
      quantityType: type,
    },
  }
}

export function removeCartItem(cartItemId: number): RemoveCartItemAction {
  return {
    type: ActionTypeCart.REMOVE_CART_ITEM,
    payload: {
      cartItemId,
    },
  }
}

export function resetCart(): ResetCartAction {
  return {
    type: ActionTypeCart.RESET_CART,
  }
}
export { ActionTypeCart }
