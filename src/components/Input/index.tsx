import { forwardRef, InputHTMLAttributes } from 'react'

import {
  InputWrapper,
  ErrorText,
  InputStyleContainer,
  InputStyled,
  RightText,
} from './styles'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string
  rightText?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, rightText, className, ...props }, ref) => {
    return (
      <InputWrapper className={className}>
        <InputStyleContainer hasError={!!error}>
          <InputStyled hasError={!!error} ref={ref} {...props} />
          {rightText && <RightText>{rightText}</RightText>}
        </InputStyleContainer>
        {error && <ErrorText>{error}</ErrorText>}
      </InputWrapper>
    )
  },
)

Input.displayName = 'Input'
