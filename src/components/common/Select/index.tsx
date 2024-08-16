import React, { useEffect, useRef, useState } from 'react';
import { SelectProps } from './interface';
import { Dropdown, DropdownItem, ErrorMessage, IconWrapper, SelectWrapper } from './select.styles';

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(({ icon: Icon, error, isTouched, options, onCustomChange, ...props }, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  const wrapperRef = useRef<HTMLDivElement>(null);


  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (value: string) => {
    const newSelectedValues = selectedValues.includes(value)
      ? selectedValues.filter(item => item !== value)
      : [...selectedValues, value];

    setSelectedValues(newSelectedValues);
    onCustomChange(newSelectedValues);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={wrapperRef}>
      {error && <ErrorMessage>{error.message} <span>*</span></ErrorMessage>}
      <SelectWrapper isValid={!error} isTouched={isTouched} onClick={handleToggle} id='select-type-food'>
        <IconWrapper>
          <Icon />
        </IconWrapper>
        <div>{selectedValues.length === 0 ? "Tipos de comida" : selectedValues.join(', ')}</div>
      </SelectWrapper>
      {isOpen && (
        <Dropdown id='dropdown-type-food'>
          {options.map((option, index) => (
            <DropdownItem key={index} onClick={() => handleSelect(option.value)}>
              <input
                id={option.value}
                type="checkbox"
                checked={selectedValues.includes(option.value)}
                readOnly
              />
              {option.label}
            </DropdownItem>
          ))}
        </Dropdown>
      )}
    </div>
  );
});


export default Select;
