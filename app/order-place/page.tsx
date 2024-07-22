"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const OrderPlace = () => {
    const router = useRouter()
    const handleclick = ()=>{
        alert("order placed")
        router.push('/')
    }
  return (
    <>
    <div>OrderPlace</div>
    <button type="button" 
    onClick={handleclick}
    className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
        Place order</button>
    </>
  )
}

export default OrderPlace