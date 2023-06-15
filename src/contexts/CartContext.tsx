import { createContext, useEffect, useReducer } from 'react'
import { CartItem } from '../interfaces/CartItem'
import { cartReducer } from '../reducers/cart/reducer'
import * as actions from '../reducers/cart/actions'
import { CartContextType } from '../interfaces/CartContextType'
import { CartContextProviderProps } from '../interfaces/CartContextProviderProps'

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const COFFEE_ITEMS_KEY = '@CoffeeDelivery:cartItems-1.0.0'

  const [cartItems, dispatch] = useReducer(cartReducer, [], (initialState) => {
    const storedCartItems = localStorage.getItem(COFFEE_ITEMS_KEY)

    if (storedCartItems) {
      return JSON.parse(storedCartItems)
    }

    return initialState
  })

  const cartQuantity = cartItems.length
  const cartItemsTotal = cartItems.reduce((total, cartItem) => {
    return total + cartItem.price * cartItem.quantity
  }, 0)

  function addCoffeeToCart(coffee: CartItem) {
    dispatch(actions.addCoffee(coffee))
  }

  function changeCartItemQuantity(
    cartItemId: number,
    type: 'increase' | 'decrease',
  ) {
    dispatch(actions.changeCartItemQuantity(cartItemId, type))
  }

  function removeCartItem(cartItemId: number) {
    dispatch(actions.removeCartItem(cartItemId))
  }

  function resetCart() {
    dispatch(actions.resetCart())
  }

  useEffect(() => {
    localStorage.setItem(COFFEE_ITEMS_KEY, JSON.stringify(cartItems))
  }, [cartItems])

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartQuantity,
        cartItemsTotal,
        addCoffeeToCart,
        changeCartItemQuantity,
        removeCartItem,
        resetCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
