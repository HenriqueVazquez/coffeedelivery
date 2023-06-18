import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { CartContextProvider } from './contexts/CartContext'
import { ModalContextProvider } from './contexts/ModalContext'

import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { AddressContextProvider } from './contexts/AddressContext'
import { useAddress } from './hooks/useAddress'

export const deliveryFormValidationSchema = zod.object({
  cep: zod.string().min(1, 'Informe o CEP'),
  street: zod.string().min(1, 'Informe o Rua'),
  number: zod.string().min(1, 'Informe o Número'),
  complement: zod.string(),
  district: zod.string().min(1, 'Informe o Bairro'),
  city: zod.string().min(1, 'Informe a Cidade'),
  uf: zod.string().min(1, 'Informe UF'),
})

export type ConfirmDelivery = zod.infer<typeof deliveryFormValidationSchema>

export function App() {
  const { address } = useAddress()

  const confirmDeliveryForm = useForm<ConfirmDelivery>({
    defaultValues: address,
    resolver: zodResolver(deliveryFormValidationSchema),
  })

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <AddressContextProvider>
          <CartContextProvider>
            <ModalContextProvider>
              <FormProvider {...confirmDeliveryForm}>
                <Router />
              </FormProvider>
            </ModalContextProvider>
          </CartContextProvider>
        </AddressContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}
