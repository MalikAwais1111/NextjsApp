'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { FaHome, FaBars, FaTimes } from 'react-icons/fa';
import Dropdown from './dropdown';
import { useRouter } from 'next/navigation';
import { DropdownItem } from './dropdown';
import { useSelector,useDispatch } from 'react-redux';
import { searchitem } from '../_liab/features/searchslice';
interface CartItem {
  id: number
  title: string
  price: number
  count: number
}

interface cartstate{
  cart:{
    cart: CartItem[]
  }
}

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [itemtosearch, setitemtosearch] = useState('');
  const cartitems = useSelector((state: cartstate) => state.cart.cart);
  const dispatch = useDispatch();
  const router = useRouter();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const products: DropdownItem[] = [
    { href: '/products/laptops', label: 'Laptops' },
    { href: '/products/mobile-accessories', label: 'Mobile Accessories' },
    { href: '/products/smartphones', label: 'Smart Phones' },
    // Add more products as needed
  ];

  const handleSearch = () => {
    if (itemtosearch.trim()) {
      dispatch(searchitem(itemtosearch));
      router.push(`/product`);
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <main>
      <nav className='flex items-center justify-between bg-zinc-900 text-white text-sm fixed top-0 right-0 left-0 z-10'>
        {/* Burger Menu Icon */}
        <button
          className='md:hidden text-3xl'
          onClick={toggleMenu}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation Links */}
        <div className={`flex-grow justify-evenly md:flex md:items-center md:space-x-6 lg:space-x-8 ${isMenuOpen ? 'block' : 'hidden md:block'}`}>
          <div className='flex flex-col md:flex-row'>
            <Link href='/'>
              <div onClick={toggleMenu} className='flex items-center p-2 border-r border-gray-800 transition-colors duration-300 ease-in-out hover:bg-gray-800'>
                <FaHome className='mr-2 text-lg'/>
                <span className='md:inline p-3'>Home pages</span>
              </div>
            </Link>
            <div className='flex z-10 items-center border-r border-gray-800 transition-colors duration-300 ease-in-out hover:bg-gray-800'>
              <Dropdown title="Products" items={products} onitemClick={toggleMenu} />
            </div>
            <Link href='/cart'>
              <div onClick={toggleMenu} className='relative flex items-center border-r border-gray-800 transition-colors duration-300 ease-in-out hover:bg-gray-800'>
                <span className='p-5'>Cart</span>
                {cartitems.length > 0 && (
                  <span className='absolute top-3 right-3 block h-3 w-3 rounded-full bg-red-500 animate-glow'></span>
                )}
              </div>
            </Link>
            <Link href='/about'>
              <div onClick={toggleMenu} className='flex items-center p-2 border-r border-gray-800 transition-colors duration-300 ease-in-out hover:bg-gray-800'>
                <span className='p-3'>About</span>
              </div>
            </Link>

          </div>

          {/* Search Bar */}
          <div className='relative w-full md:w-auto mt-2 md:mt-0'>
            <input
              className='pr-10 p-2 bg-gray-950 text-sm border-none focus:outline-none input-field w-full'
              onKeyDown={handleKeyPress}
              value={itemtosearch}
              onChange={(e) => setitemtosearch(e.target.value)}
              type='text'
              placeholder='Search'
            />
            <i onClick={handleSearch} className='fas fa-search absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 search-icon'></i>
          </div>

          {/* Authentication Links */}
          <div className='flex items-center space-x-4 md:space-x-6 mt-2 md:mt-0'>
            <Link href='/login'>
              <div onClick={toggleMenu} className='flex items-center p-2 border-r border-gray-800 transition-colors duration-300 ease-in-out hover:bg-gray-800'>
                Login
              </div>
            </Link>
            <Link href='/signup'>
              <div onClick={toggleMenu} className='flex items-center p-2 border-r border-gray-800 transition-colors duration-300 ease-in-out hover:bg-gray-800'>
                Signup
              </div>
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {/* <div className={`fixed inset-0 bg-zinc-900 bg-opacity-80 md:hidden transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} p-4`}>
        <button
          className='text-white text-2xl mb-4'
          onClick={toggleMenu}
        >
          <FaTimes />
        </button>
        <div className='flex flex-col'>
          <Link href='/'>
            <div className='py-2 border-b border-gray-800 transition-colors duration-300 ease-in-out hover:bg-gray-800'>
              Home pages
            </div>
          </Link>
          <Link href='/products'>
            <div className='py-2 border-b border-gray-800 transition-colors duration-300 ease-in-out hover:bg-gray-800'>
              Products
            </div>
          </Link>
          <Link href='/cart'>
            <div className='py-2 border-b border-gray-800 transition-colors duration-300 ease-in-out hover:bg-gray-800'>
              Cart
            </div>
          </Link>
          <Link href='/about'>
            <div className='py-2 border-b border-gray-800 transition-colors duration-300 ease-in-out hover:bg-gray-800'>
              About
            </div>
          </Link>
          <Link href='/sales'>
            <div className='py-2 border-b border-gray-800 transition-colors duration-300 ease-in-out hover:bg-gray-800'>
              Sales?
            </div>
          </Link>
          <Link href='/login'>
            <div className='py-2 border-b border-gray-800 transition-colors duration-300 ease-in-out hover:bg-gray-800'>
              Login
            </div>
          </Link>
        </div>
      </div> */}
    </main>
  );
}

export default Navbar;
