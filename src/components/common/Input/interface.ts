export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ComponentType;
  error?: { message?: string }; 
  isTouched?: boolean;
}