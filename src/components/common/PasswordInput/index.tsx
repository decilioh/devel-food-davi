import { useState, forwardRef } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { PasswordInputProps } from './interface';
import { ErrorAsterisk, ErrorMessage, IconWrapper, PasswordField, PasswordInputWrapper, ToggleButton } from './password.styles';

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
          {isPasswordVisible ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
        </ToggleButton>
      </PasswordInputWrapper>
      {error && <ErrorMessage>{error.message}</ErrorMessage>}
    </div>
  );
});

export default PasswordInput;
