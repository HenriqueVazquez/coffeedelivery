import { HeaderButton, HeaderButtonsContainer, HeaderContainer } from './styles'

import { MapPin, ShoppingCart } from 'phosphor-react'

import coffeLogoImage from '../../assets/logoCoffeeDelivery.svg'
import { NavLink } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'
import { useModal } from '../../hooks/useModal'
import { useAddress } from '../../hooks/useAddress'

export function Header() {
  const { cartQuantity } = useCart()
  const { openModal } = useModal()

  const { address } = useAddress()

  return (
    <HeaderContainer>
      <div className="container">
        <NavLink to="/">
          <img src={coffeLogoImage} alt="" />
        </NavLink>

        <HeaderButtonsContainer>
          <HeaderButton variant="purple" onClick={openModal}>
            <MapPin size={20} weight="fill" />
            {address ? `${address.city}, ${address.uf}` : `São Paulo, SP`}
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
