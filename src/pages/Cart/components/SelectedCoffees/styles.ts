import styled from 'styled-components'

export const SelectedCoffeesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;

  @media (max-width: 1100px) {
    width: 100%;
    max-width: unset;
  }
`
export const SectionBaseStyle = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors['base-card']};
  border-radius: 6px;
  padding: 2.5rem;
`

export const DetailsContainer = styled(SectionBaseStyle)`
  border-radius: 6px 44px;
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  width: 100%;

  @media (max-width: 600px) {
    padding: 1.25rem;
  }
`

export const ConfirmationSectionContainer = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 0.8rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`
