'use client'
import React, { useState } from 'react'
import { BiBasket, BiCart } from 'react-icons/bi'
import { CgMail } from 'react-icons/cg'
import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux'
import ReusableModal from '../components/modal'
import { increment, decrement, removefromcart } from '../_liab/features/cardslice'
import Select, { SingleValue } from 'react-select'
import countryList from 'react-select-country-list'

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
  const [isShippingModalOpen, setIsShippingModalOpen] = useState(false)
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false)

  // Shipping modal state
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [postcode, setPostcode] = useState('')
  const [city, setCity] = useState('')
  const [country, setCountry] = useState<SingleValue<{ label: string, value: string }> | null>(null)

  // Payment modal state
  const [cardNumber, setCardNumber] = useState('')
  const [expirationDate, setExpirationDate] = useState('')
  const [cvv, setCvv] = useState('')

  // Validity state
  const [validEmail, setValidEmail] = useState(true)
  const [validName, setValidName] = useState(true)
  const [validAddress, setValidAddress] = useState(true)
  const [validPostcode, setValidPostcode] = useState(true)
  const [validCity, setValidCity] = useState(true)
  const [validCountry, setValidCountry] = useState(true)

  const [validCardNumber, setValidCardNumber] = useState(true)
  const [validExpirationDate, setValidExpirationDate] = useState(true)
  const [validCvv, setValidCvv] = useState(true)

  const countries = countryList().getData()

  const handleCheckout = () => {
    setIsShippingModalOpen(true)
  }

  const handleCloseModal = (modal: string) => {
    if (modal === 'shipping') {
      setIsShippingModalOpen(false)
    } else if (modal === 'payment') {
      setIsPaymentModalOpen(false)
    }
  }

  const handlePaymentInfo = () => {
    // Validate shipping details
    let isValid = true
    if (!email) {
      setValidEmail(false)
      isValid = false
    } else {
      setValidEmail(true)
    }
    if (!name) {
      setValidName(false)
      isValid = false
    } else {
      setValidName(true)
    }
    if (!address) {
      setValidAddress(false)
      isValid = false
    } else {
      setValidAddress(true)
    }
    if (!postcode) {
      setValidPostcode(false)
      isValid = false
    } else {
      setValidPostcode(true)
    }
    if (!city) {
      setValidCity(false)
      isValid = false
    } else {
      setValidCity(true)
    }
    if (!country) {
      setValidCountry(false)
      isValid = false
    } else {
      setValidCountry(true)
    }

    if (isValid) {
      setIsShippingModalOpen(false)
      setIsPaymentModalOpen(true)
    }
  }

  const handleSubmitPayment = () => {
    // Validate payment details
    let isValid = true
    if (!cardNumber) {
      setValidCardNumber(false)
      isValid = false
    } else {
      setValidCardNumber(true)
    }
    if (!expirationDate) {
      setValidExpirationDate(false)
      isValid = false
    } else {
      setValidExpirationDate(true)
    }
    if (!cvv) {
      setValidCvv(false)
      isValid = false
    } else {
      setValidCvv(true)
    }

    if (isValid) {
      // Process payment
      console.log('Payment submitted')
    }
  }

  return (
    <div className='min-h-screen flex justify-center items-center bg-gray-300'>
      <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-3xl">
        {cartItems && cartItems.length > 0 ? (
          <div>
            {cartItems.map((item: CartItem) => (
              <div key={item.id} className='flex justify-between items-center border-b p-2'>
                <div>
                  <h2 className='text-xl font-semibold'>{item.title}</h2>
                  <p className='text-gray-600'>${item.price}</p>
                </div>
                <div className='flex items-center'>
                  <button
                    onClick={() => dispatch(decrement({ id: item.id }))}
                    className='px-2 py-1 bg-red-500 text-white rounded'>
                    -
                  </button>
                  <span className='px-3'>{item.count}</span>
                  <button
                    onClick={() => dispatch(increment({ id: item.id }))}
                    className='px-2 py-1 bg-green-500 text-white rounded'>
                    +
                  </button>
                  <button
                    onClick={() => dispatch(removefromcart({ id: item.id }))}
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
              <div
                className='flex items-center cursor-pointer focus:outline-none text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 transition-colors duration-300 ease-in-out'
                onClick={handleCheckout}
              >
                <div><BiCart className='text-xl' /></div>
                <div className='pl-2'>
                  <button>Checkout</button>
                </div>
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
      <ReusableModal isOpen={isShippingModalOpen} onClose={() => handleCloseModal('shipping')}>
        <div className='p-4'>
          <div>
            <h2 className='text-xl font-semibold mb-4'>Shipping Details</h2>
          </div>
          <div className='space-y-4'>
            <div className='flex items-center'>
              <div className='relative w-full'>
                <input
                  type="email"
                  placeholder='Email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`pl-10 pr-4 py-2 w-full border rounded-md focus:outline-none focus:ring-2 ${validEmail ? 'border-gray-300' : 'border-red-500'} focus:ring-blue-500`}
                />
                <CgMail className='absolute left-3 top-2.5 text-gray-500 text-xl' />
              </div>
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700'>Name</label>
              <input
                type="text"
                placeholder='Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${validName ? 'border-gray-300' : 'border-red-500'} focus:ring-blue-500`}
              />
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700'>Address</label>
              <input
                type="text"
                placeholder='Address'
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${validAddress ? 'border-gray-300' : 'border-red-500'} focus:ring-blue-500`}
              />
            </div>
            <div className='flex space-x-4'>
              <div className='w-1/2'>
                <label className='block text-sm font-medium text-gray-700'>Postcode</label>
                <input
                  type="text"
                  placeholder='Postcode'
                  value={postcode}
                  onChange={(e) => setPostcode(e.target.value)}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${validPostcode ? 'border-gray-300' : 'border-red-500'} focus:ring-blue-500`}
                />
              </div>
              <div className='w-1/2'>
                <label className='block text-sm font-medium text-gray-700'>City</label>
                <input
                  type="text"
                  placeholder='City'
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${validCity ? 'border-gray-300' : 'border-red-500'} focus:ring-blue-500`}
                />
              </div>
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700'>Country</label>
              <Select
                options={countries}
                value={country}
                onChange={setCountry}
                className={`w-full ${validCountry ? 'border-gray-300' : 'border-red-500'}`}
                placeholder='Select country'
              />
            </div>
          </div>
          <p className='mt-4 mb-4 text-lg font-medium'>Your total is ${cartItems.reduce((total, item) => total + item.price * item.count, 0).toFixed(2)}</p>
          <button
            className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 transition-colors duration-300 ease-in-out'
            onClick={handlePaymentInfo}
          >
            Payment info
          </button>
        </div>
      </ReusableModal>
      
      <ReusableModal isOpen={isPaymentModalOpen} onClose={() => handleCloseModal('payment')}>
        <div className='p-4'>
          <h2 className='text-xl font-semibold mb-4'>Payment Information</h2>
          <div className='space-y-4'>
            <div>
              <label className='block text-sm font-medium text-gray-700'>Card Number</label>
              <input
                type="number"
                placeholder='Card Number'
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${validCardNumber ? 'border-gray-300' : 'border-red-500'} focus:ring-blue-500`}
              />
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700'>Expiration Date</label>
              <input
                type="date"
                placeholder='MM/YY'
                value={expirationDate}
                onChange={(e) => setExpirationDate(e.target.value)}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${validExpirationDate ? 'border-gray-300' : 'border-red-500'} focus:ring-blue-500`}
              />
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700'>CVV</label>
              <input
                type="text"
                placeholder='CVV'
                value={cvv}
                maxLength={4}
                onChange={(e) => setCvv(e.target.value)}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${validCvv ? 'border-gray-300' : 'border-red-500'} focus:ring-blue-500`}
              />
            </div>
          </div>
          <button
            className='mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 transition-colors duration-300 ease-in-out'
            onClick={handleSubmitPayment}
          >
            Submit Payment
          </button>
        </div>
      </ReusableModal>
    </div>
  )
}

export default Cart
