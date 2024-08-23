import { useState, forwardRef } from 'react';
import { PasswordInputProps } from './interface';
import { ErrorAsterisk, ErrorMessage, IconWrapper, PasswordField, PasswordInputWrapper, ToggleButton } from './password.styles';
import { HiEye, HiEyeOff } from "react-icons/hi";




const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(({ icon: Icon, error, isTouched, ...props }, ref) => {
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  return (
    <div>
      {error && <ErrorAsterisk>*</ErrorAsterisk>}
      <PasswordInputWrapper isValid={!error} isTouched={isTouched}>
        {Icon && (
          <IconWrapper>
            <Icon />
          </IconWrapper>
        )}
        <PasswordField
          ref={ref}
          type={isPasswordVisible ? 'text' : 'password'}
          {...props}
        />
        <ToggleButton type="button" onClick={togglePasswordVisibility}>
          {isPasswordVisible ? <HiEye className='iconEye'/> : <HiEyeOff  className='iconEye' />}
        </ToggleButton>
      </PasswordInputWrapper>
      {error && <ErrorMessage>{error.message}</ErrorMessage>}
    </div>
  );
});

export default PasswordInput;
