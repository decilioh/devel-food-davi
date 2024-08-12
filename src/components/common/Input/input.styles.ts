import styled from 'styled-components';

export const InputWrapper = styled.div<{ isValid?: boolean; isTouched?: boolean }>`
  display: flex;
  align-items: center;
  border: 2px solid
    ${({ isValid, isTouched }) => {
      if (!isTouched) return '#ccc'; // Cor inicial cinza
      return isValid ? '#00BFFF' : '#FF6347';
    }};
  border-radius: 5px;
  padding: 8px;
  margin-bottom: 16px;
`;


export const InputField = styled.input`
  border: none;
  outline: none;
  flex: 1;
  padding: 8px;
  width: 558px;
`;

export const IconWrapper = styled.div`
  margin-right: 8px;
  display: flex;
  align-items: center;
`;

export const ErrorMessage = styled.span`
  color: #FF6347;
  font-size: 12px;
  margin-top: -12px;
  display: flex;
  justify-content: space-between;
`;

