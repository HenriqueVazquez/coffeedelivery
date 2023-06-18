import { produce } from 'immer'

import { ActionTypeCart } from './actions'
import { CartItem } from '../../interfaces/CartItem'
import { Action } from '../../types/ActionCart'

export function cartReducer(cartItems: CartItem[], action: Action): CartItem[] {
  switch (action.type) {
    case ActionTypeCart.ADD_COFFEE: {
      const coffeeAddedIndex = cartItems.findIndex(
        (cartItem) => cartItem.id === action.payload.coffee.id,
      )

      if (coffeeAddedIndex < 0) {
        return [...cartItems, action.payload.coffee]
      } else {
        return produce(cartItems, (draft) => {
          draft[coffeeAddedIndex].quantity += action.payload.coffee.quantity
        })
      }
    }

    case ActionTypeCart.CHANGE_CART_ITEM_QUANTITY: {
      return produce(cartItems, (draft) => {
        const coffeeIndex = cartItems.findIndex(
          (cartItem) => cartItem.id === action.payload.cartItemId,
        )

        if (coffeeIndex >= 0) {
          const item = draft[coffeeIndex]
          item.quantity =
            action.payload.quantityType === 'increase'
              ? item.quantity + 1
              : item.quantity - 1
        }
      })
    }

    case ActionTypeCart.REMOVE_CART_ITEM: {
      const coffeeIndex = cartItems.findIndex(
        (cartItem) => cartItem.id === action.payload.cartItemId,
      )

      if (coffeeIndex >= 0) {
        return produce(cartItems, (draft) => {
          draft.splice(coffeeIndex, 1)
        })
      }

      return cartItems
    }

    case ActionTypeCart.RESET_CART:
      return []

    default:
      return cartItems
  }
}
