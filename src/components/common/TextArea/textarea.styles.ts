import styled from 'styled-components';

export const TextAreaWrapper = styled.div<{ isValid?: boolean; isTouched?: boolean }>`
  display: flex;
  border: 1px solid
    ${({ isValid, isTouched }) => {
    if (!isTouched) return '#dddddd';
    return isValid ? '#07D9D9' : '#FF6347';
  }};
  background-color: white;
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;
  padding: 0.5rem;
`;

export const TextAreaField = styled.textarea`
    font-family: Roboto;
  border: none;
  outline: none;
  width: 100%;
  min-height: 120px;
  padding: 0.5rem;
  resize: vertical;
  color: #525252;
  letter-spacing: 0.05rem;
  font-size: 1.13rem;
    &::placeholder{
      color: #A2A2A2;
      letter-spacing: 0.05rem;
    }
`;

export const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.error};
  font-size: 0.75rem;
  margin-top: -0.375rem;
  display: flex;
  justify-content: space-between;
`;

export const ErrorAsterisk = styled.div`
  color: ${({ theme }) => theme.error};
  font-size: 0.75rem;
  text-align: right;
  margin-top: -0.75rem;
`;
