import styled from 'styled-components';

export const InputWrapper = styled.div<{ isValid?: boolean; isTouched?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid
    ${({ isValid, isTouched }) => {
    if (!isTouched) return '#dddddd';
    return isValid ? '#07D9D9' : '#FF6347';
  }};
  background-color: white;
  border-radius: 8px;
  margin-bottom: 8px;
  height: 56px;
  padding: 0 8px;
`;


export const InputField = styled.input`
  border: none;
  outline: none;
  flex: 1;
  padding: 8px;
  color: #525252;
  letter-spacing: 0.05rem;
  font-size: 1.13rem;
    &::placeholder{
      color: #A2A2A2;
      letter-spacing: 0.05rem;
    }
`;

export const IconWrapper = styled.div`
  margin-right: 8px;
  margin-left:10px;
  display: flex;
  align-items: center;
  color: #A2A2A2;
  font-size: 22px;
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
`
