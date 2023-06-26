import {
  HeaderButton,
  HeaderButtonsContainer,
  HeaderContainer,
  Img,
} from './styles'

import { MapPin, ShoppingCart } from 'phosphor-react'

import coffeLogoImage from '../../assets/logoCoffeeDelivery.svg'
import { NavLink, useLocation } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'
import { useModal } from '../../hooks/useModal'
import { useAddress } from '../../hooks/useAddress'

export function Header() {
  const location = useLocation()
  const isCartRoute = location.pathname === '/cart'
  const { cartQuantity } = useCart()
  const { openModal } = useModal()

  const { address } = useAddress()

  return (
    <HeaderContainer>
      <div className="container">
        <NavLink to="/">
          <Img src={coffeLogoImage} alt="" />
        </NavLink>

        <HeaderButtonsContainer>
          <HeaderButton
            variant="purple"
            onClick={isCartRoute ? () => {} : openModal}
          >
            <MapPin size={20} weight="fill" />
            {address.city ? `${address.city}, ${address.uf}` : `São Paulo, SP`}
          </HeaderButton>

          <NavLink to="/cart">
            <HeaderButton variant="yellow">
              {cartQuantity >= 1 && <span>{cartQuantity}</span>}
              <ShoppingCart size={20} weight="fill" />
            </HeaderButton>
          </NavLink>
        </HeaderButtonsContainer>
      </div>
    </HeaderContainer>
  )
}
