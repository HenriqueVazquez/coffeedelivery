import { TitleText } from '../Typography'
import { CoffeeList, OurCoffeesContainer } from './styles'
import { coffees } from '../../assets/coffee'
import { CoffeeCard } from '../CoffeeCard'

export function OurCoffee() {
  return (
    <OurCoffeesContainer className="container">
      <TitleText size="l" color="subtitle">
        Nossos cafés
      </TitleText>
      <CoffeeList>
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}
      </CoffeeList>
    </OurCoffeesContainer>
  )
}
