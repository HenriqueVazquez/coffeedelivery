import { Money, Bank, CreditCard } from 'phosphor-react'

export const paymentMethods = [
  {
    id: 1,
    label: 'Cartão de Crédito',
    icon: CreditCard,
    value: 'credit',
  },
  {
    id: 2,
    label: 'Cartão de Débito',
    icon: Bank,
    value: 'debit',
  },
  {
    id: 3,
    label: 'Dinheiro',
    icon: Money,
    value: 'money',
  },
]
