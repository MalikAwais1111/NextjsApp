import React from 'react'
import Card from '@/app/components/card'
import Image from 'next/image'

const Offers = () => {
  return (
    <div className='mt-24 mb-24 flex-wrap flex justify-center'>
      <Card className='relative w-[80%] sm:w-[45%] md:w-[30%] lg:w-[22%] m-2'>
        <div className='relative w-full pb-[80%]'>
          <Image
            className='absolute inset-0 object-cover object-center'
            alt='product1 image'
            src='/images/watch1.jpg'
            layout='fill'
          />
        </div>
        <div className='absolute flex top-10 left-14 flex-col justify-center align-middle'>
          <div className='text-black text-lg'>50% OFF</div>
          <div className='text-black text-3xl font-medium'>Smart Watch</div>
          <div className='shopnow w-32'>
            <button>Shop Now</button>
          </div>
        </div>
      </Card>
      <Card className='relative w-[80%] sm:w-[45%] md:w-[30%] lg:w-[22%] m-2'>
        <div className='relative w-full pb-[80%]'>
          <Image
            className='absolute inset-0 object-cover object-center'
            alt='product2 image'
            src='/images/mobile1.jpg'
            layout='fill'
          />
        </div>
        <div className='absolute flex top-10 left-14 flex-col justify-center align-middle'>
          <div className='text-black text-lg'>40% OFF</div>
          <div className='text-black text-3xl font-medium'>Mobile</div>
          <div className='shopnow w-32'>
            <button>Shop Now</button>
          </div>
        </div>
      </Card>
      <Card className='relative w-[80%] sm:w-[45%] md:w-[30%] lg:w-[22%] m-2'>
        <div className='relative w-full pb-[80%]'>
          <Image
            className='absolute inset-0 object-cover object-center'
            alt='product3 image'
            src='/images/controler.jpg'
            layout='fill'
          />
        </div>
        <div className='absolute flex top-10 left-14 flex-col justify-center align-middle'>
          <div className='text-black text-lg'>30% OFF</div>
          <div className='text-black text-3xl font-medium'>Smart Device</div>
          <div className='shopnow w-32'>
            <button>Shop Now</button>
          </div>
        </div>
      </Card>
      <Card className='relative w-[80%] sm:w-[45%] md:w-[30%] lg:w-[22%] m-2'>
        <div className='relative w-full pb-[80%]'>
          <Image
            className='absolute inset-0 object-cover object-center'
            alt='product4 image'
            src='/images/controler2.jpg'
            layout='fill'
          />
        </div>
        <div className='absolute flex top-10 left-14 flex-col justify-center align-middle'>
          <div className='text-black text-lg'>20% OFF</div>
          <div className='text-black text-3xl font-medium'>Headphones</div>
          <div className='shopnow w-32'>
            <button>Shop Now</button>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default Offers
