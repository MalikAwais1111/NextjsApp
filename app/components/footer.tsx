'use client'
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'

const Footer = () => {
  const searchParams = useSearchParams()
  const initialViewport = searchParams.get('viewport')
  const [viewport, setViewport] = useState(initialViewport)

  useEffect(() => {
    const handleResize = () => {
      setViewport(window.innerWidth <= 768 ? 'mobile' : 'desktop')
    }

    handleResize() // Set initial state
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className={`page-container ${viewport === 'mobile' ? 'mobile-layout' : 'desktop-layout'}`}>
      <div className='text-white bg-black'>
        <div className={`flex justify-between m-14 pt-24 ${viewport === 'mobile' ? 'flex-col justify-center' : ''}`}>
          <div className='mb-10'>
            <div className='font-medium text-2xl border-b-2 border-gray-900 border-spacing-4 relative'>
              About The Store
              <span className='absolute left-0 bottom-[-1px] h-[1px] w-[60px] bg-red-500'></span>
            </div>
            <div className='w-72 pt-10'>
              The Store at Shoponix is an original voice, and one of the leading shopping destinations in New York City, offering a curated selection of well-executed contemporary artist-made objects and jewelry.
            </div>
          </div>

          <div className='mb-10'>
            <div className='font-medium text-2xl border-b-2 border-gray-900 relative'>
              Quick Links                     
              <span className='absolute left-0 bottom-[-1px] h-[1px] w-[60px] bg-red-500'></span>
            </div>
            <div className='pt-10 pb-3 cursor-pointer group'>
              <Link href={''}>
                <span className='relative text-white group-hover:text-red-500 transition-colors duration-300'>
                  About Us
                  <span className='absolute left-0 bottom-[-1px] h-[1px] w-0 bg-red-500 transition-all duration-300 group-hover:w-full'></span>
                </span>
              </Link>
            </div>
            <div className='pb-3 cursor-pointer group'>
              <Link href={''}>
                <span className='relative text-white group-hover:text-red-500 transition-colors duration-300'>
                  Shop Now!
                  <span className='absolute left-0 bottom-[-1px] h-[1px] w-0 bg-red-500 transition-all duration-300 group-hover:w-full'></span>
                </span>
              </Link>
            </div>
            <div className='cursor-pointer group'>
              <Link href={''}>
                <span className='relative text-white group-hover:text-red-500 transition-colors duration-300'>
                  Cart
                  <span className='absolute left-0 bottom-[-1px] h-[1px] w-0 bg-red-500 transition-all duration-300 group-hover:w-full'></span>
                </span>
              </Link>
            </div>
          </div>

          <div className='mb-10'>
            <div className='font-medium text-2xl border-b-2 border-gray-900 relative'>
              Support Links
              <span className='absolute left-0 bottom-[-1px] h-[1px] w-[60px] bg-red-500'></span>
            </div>
            <div className='pt-10 pb-3 cursor-pointer group'>
              <Link href={''}>
                <span className='relative text-white group-hover:text-red-500 transition-colors duration-300'>
                  Signup
                  <span className='absolute left-0 bottom-[-1px] h-[1px] w-0 bg-red-500 duration-300 group-hover:w-full'></span>
                </span>
              </Link>
            </div>
            <div className='pb-3 cursor-pointer group'>
              <Link href={''}>
                <span className='relative text-white group-hover:text-red-500 transition-colors duration-300'>
                  Login
                  <span className='absolute left-0 bottom-[-1px] h-[1px] w-0 bg-red-500 duration-300 group-hover:w-full'></span>
                </span>
              </Link>
            </div>
            <div className='cursor-pointer group'>
              <Link href={''}>
                <span className='relative text-white group-hover:text-red-500 transition-colors duration-300'>
                  Home
                  <span className='absolute left-0 bottom-[-1px] h-[1px] w-0 bg-red-500 duration-300 group-hover:w-full'></span>
                </span>
              </Link>
            </div>
          </div>

          <div className='mb-10'>
            <div className='font-medium text-2xl border-b-2 border-gray-900 relative'>
              Contact Info
              <span className='absolute left-0 bottom-[-1px] h-[1px] w-[60px] bg-red-500'></span>
            </div>
            <div className='pt-10 pb-3 group'>
              <span className='relative text-white group-hover:text-red-500 transition-colors duration-300 cursor-pointer'>
                Wonder Street, USA, New York
                <span className='absolute left-0 bottom-[-1px] h-[1px] w-0 bg-red-500 duration-300 group-hover:w-full'></span>
              </span>
            </div>
            <div className='pb-3 group cursor-pointer'>
              <span className='relative text-white group-hover:text-red-500 transition-colors duration-300'>
                +01 321 654 214
                <span className='absolute left-0 bottom-[-1px] h-[1px] w-0 bg-red-500 duration-300 group-hover:w-full'></span>
              </span>
            </div>
            <div className='group cursor-pointer'>
              <span className='relative text-white group-hover:text-red-500 transition-colors duration-300'>
                hello@shoponix.com
                <span className='absolute left-0 bottom-[-1px] h-[1px] w-0 bg-red-500 duration-300 group-hover:w-full'></span>
              </span>
            </div>
          </div>
        </div>
        
        <div className='flex justify-center p-8 border-t-2 border-gray-900'>
          Copyright © 2024 Shoponix Designed By EnvyTheme | All rights reserved.
        </div>
      </div>
    </div>
  )
}

export default Footer
