import React from 'react';
import { InputProps } from './interface';
import { ErrorMessage, IconWrapper, InputField, InputWrapper } from './input.styles';


const Input = React.forwardRef<HTMLInputElement, InputProps>(({ icon: Icon, error, isTouched, onChange, ...props }, ref) => {
    return (
      <>
        {error && <ErrorMessage>{error.message} <span>*</span></ErrorMessage>}
        <InputWrapper isValid={!error} isTouched={isTouched}>
          <IconWrapper>
            <Icon />
          </IconWrapper>
          <InputField ref={ref} {...props} onChange={onChange}/>
        </InputWrapper>
      </>
    );
  }
);

export default Input;
