import React from 'react';
import { TextAreaProps } from './interface';
import { ErrorAsterisk, ErrorMessage, TextAreaField, TextAreaWrapper } from './textarea.styles';

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
    ({ error, isTouched, onChange, ...props }, ref) => {
      return (
        <div>
          {error && <ErrorAsterisk>*</ErrorAsterisk>}
          <TextAreaWrapper isValid={!error} isTouched={isTouched}>
            <TextAreaField ref={ref} {...props} onChange={onChange} />
          </TextAreaWrapper>
          {error && <ErrorMessage>{error.message}</ErrorMessage>}
        </div>
      );
    }
  );
  
  export default TextArea;