import { useFormContext, FieldErrors } from 'react-hook-form'
import { AddressFields } from '../../../../components/Form/AddressFields'

export function AddressForm() {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return <AddressFields register={register} errors={errors as FieldErrors} />
}
