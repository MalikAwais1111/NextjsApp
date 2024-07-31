'use client'
import React from 'react'
import { BiBasket } from 'react-icons/bi'
import { BiCart } from 'react-icons/bi'
import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, removefromcart } from '../_liab/features/cardslice'

interface CartItem {
  id: number
  title: string
  price: number
  count: number
}

interface CartState {
    cart: {
      cart: CartItem[]
    }
  }

const Cart = () => {
    const cartItems = useSelector((state: CartState) => state.cart.cart)
    const dispatch = useDispatch()

    return (
        <div className='min-h-screen flex justify-center items-center bg-gray-300'>
            <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-3xl">
                {cartItems && cartItems.length > 0 ? (
                    <div>
                        {cartItems.map((item:CartItem) => (
                            <div key={item.id} className='flex justify-between items-center border-b p-2'>
                                <div>
                                    <h2 className='text-xl font-semibold'>{item.title}</h2>
                                    <p className='text-gray-600'>${item.price}</p>
                                </div>
                                <div className='flex items-center'>
                                    <button
                                        onClick={() => dispatch(decrement({id:item.id}))}
                                        className='px-2 py-1 bg-red-500 text-white rounded'>
                                        -
                                    </button>
                                    <span className='px-3'>{item.count}</span>
                                    <button
                                        onClick={() => dispatch(increment({id:item.id}))}
                                        className='px-2 py-1 bg-green-500 text-white rounded'>
                                        +
                                    </button>
                                    <button
                                        onClick={() => dispatch(removefromcart({id:item.id}))}
                                        className='ml-3 px-2 py-1 bg-gray-500 text-white rounded'>
                                        Remove
                                    </button>
                                </div>
                            </div>
                        ))}
                        <div className='flex flex-col sm:flex-row justify-between items-center rounded-md align-middle mt-5 mb-5 p-3 border border-solid border-slate-300 font-medium text-lg'>
                            <div>
                                Total: ${cartItems.reduce((total, item) => total + item.price * item.count, 0).toFixed(2)}
                            </div>
                            <div className='flex items-center cursor-pointer focus:outline-none text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 transition-colors duration-300 ease-in-out'>
                                <div><BiCart className='text-xl'/></div>
                                <div className='pl-2'>Checkout</div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className='bg-green-500 border rounded-md h-64 flex flex-col justify-center items-center'>
                        <div className='flex justify-center items-center text-white text-lg sm:text-white sm:text-2xl p-3'>
                            <BiBasket /> <p className='pl-3'>No Products in the cart.</p>
                        </div>
                        <div>
                            <Link href={'/products'}>
                                <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 transition-colors duration-300 ease-in-out'>
                                    View Products
                                </button>
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Cart
