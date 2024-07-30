import React from 'react'
import { BiBasket } from 'react-icons/bi'
import { BiCart } from 'react-icons/bi'
import Link from 'next/link'

const Cart = () => {
  return (
    <div className='min-h-screen flex justify-center  items-center bg-gray-300'>
        <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-3xl">
            <div className=' bg-green-500 border rounded-md h-64 flex flex-col justify-center items-center'>
                <div className='flex justify-center items-center text-white text-lg sm:text-white sm:text-2xl p-3'>
                    <BiBasket/> <p className='pl-3'>No Products in the cart.</p>
                </div>
                <div>
                <Link href={'/products'}>
                    <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 transition-colors duration-300 ease-in-out'>
                       View Products
                    </button>
                </Link>
                </div>
            </div>

            <div className='flex flex-col sm:flex-row justify-between items-center rounded-md align-middle mt-5 mb-5 p-3 border border-solid border-slate-300 font-medium text-lg'>
                <div>
                    Total: 
                </div>
                <div className='flex items-center cursor-pointer focus:outline-none text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2  dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 transition-colors duration-300 ease-in-out'>
                    <div><BiCart className='text-xl'/></div>
                    <div className='pl-2'>Checkout</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cart