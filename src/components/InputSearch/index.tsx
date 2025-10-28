
import React, { useEffect, useState } from 'react';
import { useDebounce } from '../../hooks/useDebounce';
import { InputSearchIcon } from '../../assets/svgs';

export interface InputSearchProps {
  label?: string;
  placeholder: string;
  onDebouncedChange: (value: string) => void;
  onInputChange?: (isTyping: boolean) => void;
  className?: string;
}

const InputSearch = ({ label, placeholder, onDebouncedChange, onInputChange }: InputSearchProps) => {
  const [inputValue, setInputValue] = useState('');
  const debouncedInputValue = useDebounce(inputValue, 500);

  useEffect(() => {
    onDebouncedChange(debouncedInputValue);
  }, [debouncedInputValue, onDebouncedChange]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    // notify parent that the user is actively typing
    if (onInputChange) onInputChange(true);
  };

  return (
    <form className="mx-auto flex">   
        <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">{label}</label>
    <div className="relative">
      <div className="absolute inset-y-0 start-0 flex items-center ps-3">
          <InputSearchIcon />
      </div>
      <input
        type="search"
        id="default-search"
        value={inputValue}
        onChange={handleChange}
        onBlur={() => {
          if (onInputChange) onInputChange(false);
        }}
        className="block w-full p-2.5 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeholder}
        required
      />
        </div>
    </form>
  );
};

export default InputSearch;




