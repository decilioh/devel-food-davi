export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    error?: { message?: string };
    isTouched?: boolean;
  }
  