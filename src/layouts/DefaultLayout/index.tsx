import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { DeliveryModal } from '../../components/DeliveryModal'
import { LayoutContainer } from './styles'

export function Defaultlayout() {
  return (
    <LayoutContainer>
      <Header />
      <DeliveryModal />
      <Outlet />
    </LayoutContainer>
  )
}
