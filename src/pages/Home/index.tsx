import { OurCoffee } from '../../components/OurCoffee'
import { Banner } from './components/Banner'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Banner />
      <OurCoffee />
    </HomeContainer>
  )
}
