import React from 'react'
import Card from '@/app/components/card'
import Image from 'next/image'
import '../global.css'

const Topproducts = () => {
  return (
    <>
      <div className='w-full mt-20 mb-10 text-center'>
        <div className='text-xl text-red-600 mb-4'>Products</div>
        <div className='text-4xl font-medium text-black'>Our Hot Products</div>
      </div>
      <div className='mt-20 mb-10 flex m-10'>
        <Card className='m-3 hover-up'>
          <div><Image
              alt='iphone X R'
              src={'/images/topmbl.jpg'}
              width={300}
              height={500}>
            </Image></div>
          <div className='flex justify-center m-3 text-2xl text-black from-neutral-800'>iphone X R</div>
          <div className='flex justify-center text-rose-600'>700$</div>
        </Card>
        <Card className='m-3 hover-up'>
          <div><Image
              alt='iphone 11 Pro'
              src={'/images/topmbl2.jpg'}
              width={300}
              height={500}>
            </Image></div>
          <div className='flex justify-center m-3 text-2xl text-black from-neutral-800'>iphone 11 Pro</div>
          <div className='flex justify-center text-rose-600'>679$</div>
        </Card>
        <Card className='m-3 hover-up'>
          <div><Image
              alt='iMac'
              src={'/images/topmbl3.jpg'}
              width={300}
              height={500}>
            </Image></div>
          <div className='flex justify-center m-3 text-2xl text-black from-neutral-800'>iMac</div>
          <div className='flex justify-center text-rose-600'>1099$</div>
        </Card>
        <Card className='m-3 hover-up'>
          <div><Image
              alt='Mobile'
              src={'/images/topmbl4.jpg'}
              width={300}
              height={500}>
            </Image></div>
          <div className='flex justify-center m-3 text-2xl text-black from-neutral-800'>Mobile</div>
          <div className='flex justify-center text-rose-600'>2045$</div>
        </Card>
      </div>
      <div className=' mb-24 flex m-10'>
        <Card className='m-3 hover-up'>
          <div><Image
              alt='Sony Speaker'
              src={'/images/sonyspeaker.jpg'}
              width={300}
              height={500}>
            </Image></div>
          <div className='flex justify-center m-3 text-2xl text-black from-neutral-800'>Sony Speaker</div>
          <div className='flex justify-center text-rose-600'>305$</div>
        </Card>
        <Card className='m-3 hover-up'>
          <div><Image
              alt='MacBook Pro'
              src={'/images/macpro.jpg'}
              width={300}
              height={500}>
            </Image></div>
          <div className='flex justify-center m-3 text-2xl text-black from-neutral-800'>MacBook Pro</div>
          <div className='flex justify-center text-rose-600'>1250$</div>
        </Card>
        <Card className='m-3 hover-up'>
          <div><Image
              alt='Surface Book'
              src={'/images/surfacebook.jpg'}
              width={300}
              height={500}>
            </Image></div>
          <div className='flex justify-center m-3 text-2xl text-black from-neutral-800'>Surface Book</div>
          <div className='flex justify-center text-rose-600'>1599.99$</div>
        </Card>
        <Card className='m-3 hover-up'>
          <div><Image
              alt='Lightning to USB A Cable'
              src={'/images/topmbl4.jpg'}
              width={300}
              height={500}>
            </Image></div>
          <div className='flex justify-center m-3 text-2xl text-black from-neutral-800'>Lightning to USB A Cable</div>
          <div className='flex justify-center text-rose-600'>17.99$</div>
        </Card>
      </div>
    </>
  )
}

export default Topproducts
