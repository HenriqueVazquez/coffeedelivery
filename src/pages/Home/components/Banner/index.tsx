import {
  BannerContainer,
  BannerContent,
  BannerTitle,
  BenefitsContainer,
} from './styles'

import bannerCoffee from '../../../../assets/bannerCoffee.svg'
import { RegularText } from '../../../../components/Typography'
import { InfoWithIcon } from '../../../../components/InfoWithIcon'
import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'
import { useTheme } from 'styled-components'

export function Banner() {
  const { colors } = useTheme()

  return (
    <BannerContainer>
      <BannerContent className="container">
        <div>
          <section>
            <BannerTitle size="xl">
              Encontre o café perfeito para qualquer hora do dia
            </BannerTitle>
            <RegularText size="l" color="subtitle" as="h3">
              Com o Coffe Delivery você recebe seu café onde estiver, a qualquer
              hora
            </RegularText>
          </section>

          <BenefitsContainer>
            <InfoWithIcon
              iconColor={colors['brand-yellow-dark']}
              icon={<ShoppingCart weight="fill" />}
              text="Compra simples e segura"
            />
            <InfoWithIcon
              iconColor={colors['base-text']}
              icon={<Package weight="fill" />}
              text="Embalagem mantém o café intacto"
            />
            <InfoWithIcon
              iconColor={colors['brand-yellow']}
              icon={<Timer weight="fill" />}
              text="Entrega rápida e rastreada"
            />
            <InfoWithIcon
              iconColor={colors['brand-purple']}
              icon={<Coffee weight="fill" />}
              text="O café chega fresquinho até você"
            />
          </BenefitsContainer>
        </div>

        <div className="imageBannerContainer">
          <img src={bannerCoffee} alt="" />
        </div>
      </BannerContent>
    </BannerContainer>
  )
}
