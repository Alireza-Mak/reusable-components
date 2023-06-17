import { useState, useRef, useEffect } from 'react';
import DropdownPanel from '../Panel/DropdownPanel';
import { IoIosArrowDropdownCircle } from 'react-icons/io';
import { DropdownItemsType } from '../../pages/DropdownPage';
interface DropdownProps {
  dropdownData: any;
  dropdownTitle?: string;
}
const Dropdown: React.FC<DropdownProps> = ({ dropdownData, dropdownTitle }) => {
  const [isOpen, setIsOpen] = useState<Boolean>(false);
  const [value, setValue] = useState<string>(dropdownTitle || 'Select...');
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: Event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('click', handleOutsideClick, true);
    return () =>
      document.removeEventListener('click', handleOutsideClick, true);
  }, [dropdownRef]);
  const handleClick = () => {
    setIsOpen((currentIsOpen) => !currentIsOpen);
  };
  const handleOptionClick = (value: string): void => {
    setValue(value);
    setIsOpen((currentIsOpen) => !currentIsOpen);
  };
  const renderOptions = dropdownData.map((option: DropdownItemsType) => (
    <div
      className="hover:bg-sky-100 rounded cursor-pointer p-1 flex items-center justify-between"
      key={option.value}
      onClick={() => handleOptionClick(option.label)}
    >
      {option.label}
      {option.color}
    </div>
  ));
  return (
    <div ref={dropdownRef} className="w-48 relative">
      <DropdownPanel onClick={handleClick}>
        <div className="flex justify-between items-center cursor-pointer">
          {value}
          <div className={`bg-${value.toLowerCase()}-600 w-5 h-5`}></div>

          <IoIosArrowDropdownCircle className="text-lg" />
        </div>
      </DropdownPanel>
      {isOpen && (
        <DropdownPanel className="absolute top-full">
          {renderOptions}
        </DropdownPanel>
      )}
    </div>
  );
};

export default Dropdown;
