import styled from 'styled-components'

import bannerBackground from '../../../../assets/bannerBackground.png'
import { TitleText } from '../../../../components/Typography'

export const BannerContainer = styled.section`
  width: 100%;
  height: 34rem;
  background: ${() => `url(${bannerBackground})`} no-repeat center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1210px) {
    margin-bottom: 20rem;
  }
`

export const BannerContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;

  > div {
    flex: 1;
  }

  > div.imageBannerContainer {
    flex: 1;

    img {
      width: 100%;
    }
  }

  @media (max-width: 1210px) {
    gap: 1rem;
    margin-top: 20rem;
    flex-direction: column-reverse;
    > img {
      width: 100%;
    }
  }
`

export const BannerTitle = styled(TitleText)`
  width: 36.75rem;
  margin-bottom: 1rem;

  @media (max-width: 700px) {
    width: 100%;
  }
`

export const BenefitsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1.25rem;
  margin-top: 4.125rem;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    margin-top: 3rem;
    font-size: 1.1rem;
  }
`
