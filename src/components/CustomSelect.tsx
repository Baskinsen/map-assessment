import React, { useState } from "react";
import ArrowUp from '../assets/Arrowup.png'

interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  options: Option[];
  placeholder?: string;
  onChange: (value: string) => void;
  className?: string;
}

const CustomSelect: React.FC<SelectProps> = ({
  options,
  placeholder,
  onChange,
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<Option | null>(null);

  const handleOptionClick = (option: Option) => {
    setSelected(option);
    setIsOpen(false);
    onChange(option.value);
  };

  return (
    <div className={`relative`}>
      <button
        type="button"
        className={`flex justify-between h-[40px] w-full text-[14px]  bg-white p-2 rounded-md border-[1px] border border-[#D0D5DD]  focus:outline-none focus:ring-2 focus:ring-blue-200 ${className}`}
        // onClick={() => setIsOpen((prev) => !prev)}
      >
        <span className="my-auto">
          {selected ? selected.label : placeholder}
        </span>

        <img
          src={ArrowUp}
          className="transform rotate-180 float-right my-auto w-5 h-5"
        />
      </button>

      {isOpen && (
        <ul className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
          {options.map((option) => (
            <li
              key={option.value}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100"
              onClick={() => handleOptionClick(option)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;
