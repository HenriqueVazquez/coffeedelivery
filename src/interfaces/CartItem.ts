import { Coffee } from './Coffee'

export interface CartItem extends Coffee {
  quantity: number
}
