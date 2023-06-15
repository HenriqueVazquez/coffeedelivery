import { ActionTypeCart } from '../reducers/cart/actions'
import { CartItem } from './CartItem'

export interface AddCoffeeAction {
  type: ActionTypeCart.ADD_COFFEE
  payload: {
    coffee: CartItem
  }
}

export interface ChangeCartItemQuantityAction {
  type: ActionTypeCart.CHANGE_CART_ITEM_QUANTITY
  payload: {
    cartItemId: number
    quantityType: 'increase' | 'decrease'
  }
}

export interface RemoveCartItemAction {
  type: ActionTypeCart.REMOVE_CART_ITEM
  payload: {
    cartItemId: number
  }
}

export interface ResetCartAction {
  type: ActionTypeCart.RESET_CART
}
