import Link from 'next/link';
import React from 'react';
import { FaHome } from 'react-icons/fa';
import Image from 'next/image';
import logo from './EC-website-final-logo-removebg-preview.png';

const Navbar = () => {
  return (
    <main>
      <nav className='flex justify-evenly bg-zinc-900 text-white text-sm fixed top-0 right-0 left-0'>
        <div className='flex p-0'>
          <div className=' flex p-5 border-r border-gray-800 transition-colors duration-300 ease-in-out hover:bg-gray-800'>
            <FaHome className='mr-3 text-lg'/>
            Home pages <span className='ml-1' style={{fontSize:'10px'}}>&#x25BC;</span>
          </div>
          <div className='p-5 border-r border-gray-800 transition-colors duration-300 ease-in-out hover:bg-gray-800'>Products
          <span className='ml-1' style={{fontSize:'10px'}}>&#x25BC;</span>
          </div>
          <div className='p-5 border-r border-gray-800 transition-colors duration-300 ease-in-out hover:bg-gray-800'>Cart</div>
          <div className='p-5 border-r border-gray-800 transition-colors duration-300 ease-in-out hover:bg-gray-800'>About</div>
          <div className='p-5 border-r border-gray-800 transition-colors duration-300 ease-in-out hover:bg-gray-800'>Sales?</div>
        </div>
        <div className='flex'>
          <div className='p-5 border-r border-gray-800 transition-colors duration-300 ease-in-out hover:bg-gray-800'>Login</div>
          <div className='p-5 border-r border-gray-800 transition-colors duration-300 ease-in-out hover:bg-gray-800'>Signup</div>
          <div className='flex items-center p-0'>
            <div className='relative w-full'>
              <input 
                className='pr-10 p-5 bg-gray-950 text-sm border-none focus:outline-none input-field w-full' 
                type="text" 
                placeholder='Search'  
              />
              <i className='fas fa-search absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 search-icon'></i>
            </div>
          </div>
        </div>
      </nav>
    </main>
  );
}

export default Navbar;
