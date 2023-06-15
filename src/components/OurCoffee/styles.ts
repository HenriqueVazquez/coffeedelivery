import styled from 'styled-components'

export const OurCoffeesContainer = styled.section`
  width: 100%;
  margin-top: 2rem;

  @media (max-width: 700px) {
    margin-top: 23rem;
  }

  @media (max-width: 320px) {
    margin-top: 25rem;
  }
`
export const CoffeeList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 2rem;
  row-gap: 2.5rem;
  margin-top: 3.375rem;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 880px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 610px) {
    grid-template-columns: 1fr;
  }
`
