import React from 'react';
import { InputProps } from './interface';
import { ErrorAsterisk, ErrorMessage, IconWrapper, InputField, InputWrapper } from './input.styles';


const Input = React.forwardRef<HTMLInputElement, InputProps>(({ icon: Icon, error, isTouched, onChange, ...props }, ref) => {
  return (
    <div>
      {error && <ErrorAsterisk>*</ErrorAsterisk>}
      <InputWrapper isValid={!error} isTouched={isTouched}>
        {Icon && (
          <IconWrapper>
            <Icon/>
          </IconWrapper>
        )}
        <InputField ref={ref} {...props} onChange={onChange} />
      </InputWrapper>
      {error && <ErrorMessage>{error.message}</ErrorMessage>}
    </div>
  );
}
);

export default Input;
