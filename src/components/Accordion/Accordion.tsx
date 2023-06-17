import React, { useEffect, useRef, useState } from 'react';
import { AccordionItemsType, AccordionType } from '../../pages/AccordionPage';
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDropdownCircle,
} from 'react-icons/io';
interface AccordionProps {
  accData: AccordionType;
}
const Accordion: React.FC<AccordionProps> = ({ accData }) => {
  const accRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleOutAccClick = (event: MouseEvent) => {
      if (
        accRef.current &&
        !accRef.current.contains(event.target as HTMLElement)
      ) {
        setExpandedIndex(-1);
      }
    };
    document.addEventListener('click', handleOutAccClick, true);
    return () => document.addEventListener('click', handleOutAccClick, true);
  }, [accRef]);
  const [expandedIndex, setExpandedIndex] = useState<number>(-1);
  const onitemClick = (index: number) => {
    setExpandedIndex((currentValue: number) => {
      if (currentValue === index) {
        return -1;
      } else {
        return index;
      }
    });
  };
  const renderOptions = accData.map((option: AccordionItemsType, index) => {
    const isExpanded = index === expandedIndex;
    const icons = (
      <span className="text-xl">
        {isExpanded ? (
          <IoIosArrowDropdownCircle />
        ) : (
          <IoIosArrowDropleftCircle />
        )}
      </span>
    );
    return (
      <div ref={accRef} onClick={() => onitemClick(index)} key={option.id}>
        <div className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer">
          {option.title}
          {icons}
        </div>
        {isExpanded && <div className="border-b p-5">{option.content}</div>}
      </div>
    );
  });
  return <div className="border-x border-t rounded">{renderOptions}</div>;
};

export default Accordion;
