import { useState } from 'react';
import Link from 'next/link';

export interface DropdownItem {
  href: string;
  label: string;
}

interface DropdownProps {
  title: string;
  items: DropdownItem[];
  onitemClick?: () => void;
}

const Dropdown: React.FC<DropdownProps> = ({ title, items, onitemClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div 
      className='relative'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className='flex items-center py-0 m-5 border-r border-gray-800 transition-colors duration-300 ease-in-out hover:bg-gray-800 cursor-pointer'>
        {title}
        <span className='ml-1 text-xs'>&#x25BC;</span>
      </div>
      <div
        className={`absolute top-full bg-white shadow-lg border border-gray-200 rounded-md transition-opacity duration-300 ease-in-out ${isHovered ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
      >
        <ul className='p-2'>
          {items.map((item, index) => (
            <li key={index} className='p-0 hover:bg-gray-200 rounded-md'>
              <Link 
                href={item.href}
                onClick={() => {
                  if (onitemClick) onitemClick(), handleMouseLeave(); // Call onitemClick if provided
                }}
              >
                <p className='text-black p-3'>{item.label}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
