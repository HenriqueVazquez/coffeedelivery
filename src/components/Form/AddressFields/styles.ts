import styled from 'styled-components'

import { Input } from '../../../components/Input'

export const FieldsContainer = styled.div`
  .row {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    @media (max-width: 499px) {
      display: block;

      .cep {
        width: 100%;
      }

      .street {
        width: 100%;
      }

      .labelNumber {
        width: 100%;
      }

      .number {
        width: 100%;
      }

      .complement {
        width: 100%;
      }
      .districtLabel {
        width: 100%;
      }

      .district {
        width: 100%;
      }

      .ciy {
        width: 100%;
      }

      .ufLabel {
        width: 100%;
      }

      .uf {
        width: 100%;
      }
    }
  }

  .cep {
    width: 12.5rem;
  }

  .street {
    width: 100%;
  }

  .labelNumber {
    width: 12.6rem;
  }

  .numberComplement {
  }

  .number {
    width: 12.5rem;
  }

  .complement {
    width: 100%;
  }
  .districtLabel {
    width: 12.6rem;
  }

  .row3 {
    padding: 0 0.49rem 0 0;
  }
  .district {
    width: 12.5rem;
  }

  .ciy {
    width: 100%;
  }

  .ufLabel {
    width: 3.76rem;
  }

  .uf {
    width: 4.375rem;
  }

  .registerButtonContainer {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const InputForm = styled(Input)`
  padding: 0 0.25rem 0 0.25rem;
  border-radius: 4px;
  height: 4.375rem;
`
