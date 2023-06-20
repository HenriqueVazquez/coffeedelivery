import { Money, Bank, CreditCard } from 'phosphor-react'

export const paymentMethods = [
  {
    id: 1,
    label: 'Cartão de Crédito',
    icon: CreditCard,
  },
  {
    id: 2,
    label: 'Cartão de Débito',
    icon: Bank,
  },
  {
    id: 3,
    label: 'Dinheiro',
    icon: Money,
  },
]
