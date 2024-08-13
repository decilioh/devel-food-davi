export interface PasswordInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    icon: React.ComponentType;
    error?: { message?: string };
    isTouched?: boolean;
  }
  