import styled from 'styled-components'
import { RegularText } from '../../Typography'

export const HeaderContainer = styled.div`
  padding: 1.25rem 1.25rem 1rem 1.8rem;
  position: relative;
  margin-left: 0.5rem;

  svg {
    position: absolute;
    color: ${(props) => props.theme.colors['brand-yellow-dark']};
    top: calc(2.5rem / 2);
    left: calc(-0.1rem / 2);
  }

  @media (max-width: 610px) {
    padding-top: 3.5rem;

    svg {
      top: calc(6.5rem / 2);
    }
  }
`

export const TitleModal = styled(RegularText)``
