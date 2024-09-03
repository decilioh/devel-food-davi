import styled from 'styled-components';

export const TextAreaWrapper = styled.div<{ isValid?: boolean; isTouched?: boolean }>`
  display: flex;
  border: 1px solid
    ${({ isValid, isTouched }) => {
    if (!isTouched) return '#dddddd';
    return isValid ? '#07D9D9' : '#FF6347';
  }};
  background-color: white;
  border-radius: 8px;
  margin-bottom: 8px;
  padding: 8px;
`;

export const TextAreaField = styled.textarea`
    font-family: Roboto;
  border: none;
  outline: none;
  width: 100%;
  min-height: 120px;
  padding: 8px;
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
  font-size: 12px;
  margin-top: -6px;
  display: flex;
  justify-content: space-between;
`;

export const ErrorAsterisk = styled.div`
  color: ${({ theme }) => theme.error};
  font-size: 12px;
  text-align: right;
  margin-top: -12px;
`;
