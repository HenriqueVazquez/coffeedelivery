import {
  AddCoffeeAction,
  ChangeCartItemQuantityAction,
  RemoveCartItemAction,
  ResetCartAction,
} from '../interfaces/ActionCart'

export type Action =
  | AddCoffeeAction
  | ChangeCartItemQuantityAction
  | RemoveCartItemAction
  | ResetCartAction
