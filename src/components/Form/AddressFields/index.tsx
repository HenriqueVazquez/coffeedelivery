import { Label, InputForm, FieldsContainer } from './styles'

import { UseFormRegister, FieldErrors } from 'react-hook-form'
import { ConfirmDelivery } from '../../../App'

interface AddressFieldsProps {
  register: UseFormRegister<ConfirmDelivery>
  errors: FieldErrors<ConfirmDelivery>
}

export function AddressFields({ register, errors }: AddressFieldsProps) {
  return (
    <FieldsContainer>
      <div className="row">
        <Label htmlFor="cep">
          <InputForm
            id="cep"
            type="text"
            placeholder="CEP"
            {...register('cep')}
            className="cep"
            error={errors?.cep?.message}
          />
        </Label>
      </div>
      <div className="row">
        <Label htmlFor="street">
          <InputForm
            id="street"
            type="text"
            placeholder="Rua"
            {...register('street')}
            className="street"
            error={errors?.street?.message}
          />
        </Label>
      </div>

      <div className="row numberComplement">
        <Label className="labelNumber" htmlFor="number">
          <InputForm
            id="number"
            type="text"
            placeholder="Número"
            {...register('number')}
            className="number"
            error={errors?.number?.message}
          />
        </Label>
        <Label htmlFor="complement">
          <InputForm
            id="complement"
            rightText="Opcional"
            type="text"
            placeholder="Complemento"
            {...register('complement')}
            className="complement"
            error={errors?.complement?.message}
          />
        </Label>
      </div>
      <div className="row row3">
        <Label className="districtLabel" htmlFor="district">
          <InputForm
            id="district"
            type="text"
            placeholder="Bairro"
            {...register('district')}
            className="district"
            error={errors?.district?.message}
          />
        </Label>
        <Label htmlFor="city">
          <InputForm
            id="city"
            type="text"
            placeholder="Cidade"
            {...register('city')}
            className="city"
            error={errors?.city?.message}
          />
        </Label>
        <Label className="ufLabel" htmlFor="uf">
          <InputForm
            id="uf"
            type="text"
            placeholder="UF"
            className="uf"
            {...register('uf')}
            error={errors?.uf?.message}
          />
        </Label>
      </div>
    </FieldsContainer>
  )
}
