import styled from 'styled-components';

export const InputWrapper = styled.div<{ isValid?: boolean; isTouched?: boolean; showIcon?: boolean; disabled?: boolean }>`
  width: ${({ showIcon }) => showIcon ? "256px" : "auto"};
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid
    ${({ isValid, isTouched, disabled }) => {
      if (disabled) return '#8E8E8E'; // cor de borda desabilitada
      if (!isTouched) return '#dddddd';
      return isValid ? '#07D9D9' : '#FF6347';
    }};
  background-color: ${({ disabled }) => disabled ? '#DDDDDD' : 'white'}; // cor de fundo desabilitada
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;
  height: 3.5rem;
  padding: 0 0.5rem;
`;

export const InputField = styled.input<{ disabled?: boolean }>`
  border: none;
  outline: none;
  flex: 1;
  padding: 0.5rem;
  color: ${({ disabled }) => disabled ? '#A2A2A2' : '#525252'}; // cor do texto desabilitado
  letter-spacing: 0.05rem;
  font-size: 1.13rem;
  background-color: transparent;
  
  &::placeholder {
    color: #A2A2A2;
    letter-spacing: 0.05rem;
  }

  &:disabled {
    cursor: not-allowed; // cursor para estado desabilitado
  }

  &::-webkit-calendar-picker-indicator {
    opacity: 0;
    position: absolute;
    transform: translateX(-40px);
  }

`;

export const IconWrapper = styled.div<{ disabled?: boolean }>`
  margin-right: 0.5rem;
  margin-left: 0.625rem;
  display: flex;
  align-items: center;
  color: ${({ disabled }) => disabled ? "#6e6e6e" : '#A2A2A2'};
  font-size: 1.38rem;
`;

export const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.error};
  font-size: 0.75rem;
  margin-top: -0.375rem;
  display: flex;
  justify-content: space-between;
`;

export const ErrorAsterisk = styled.div<{ showIcon?: boolean }>`
  max-width: ${({ showIcon }) => showIcon ? "270px" : "auto"};
  color: ${({ theme }) => theme.error};
  font-size: 0.75rem;
  text-align: right;
  margin-top: -0.75rem;
`;
