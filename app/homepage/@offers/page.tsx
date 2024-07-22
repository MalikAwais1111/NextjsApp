import React from 'react'
import Card from '@/app/components/card'
import Image from 'next/image'

const Offers = () => {
  return (
    <div className='mt-24 mb-24 flex flex-wrap ml-14'>
      <Card className='relative'>
        <Image className='m-5'
          alt='product1 image'
          src={'/images/watch1.jpg'}
          width={280}
          height={265}
        />
        <div className='absolute flex top-10 left-14 flex-col justify-center align-middle'>
          <div className='text-black text-lg'>50% OFF</div>
          <div className='text-black text-3xl font-medium'>Smart Watch</div>
          <div className='shopnow w-32'>
            <button>Shop Now</button>
          </div>
        </div>
      </Card>
      <Card className='relative'>
        <Image className='m-5'
          alt='product2 image'
          src={'/images/mobile1.jpg'}
          width={280}
          height={265}
        />
        <div className='absolute flex top-10 left-14 flex-col justify-center align-middle'>
          <div className='text-black text-lg'>40% OFF</div>
          <div className='text-black text-3xl font-medium'>Mobile</div>
          <div className='shopnow w-32'>
            <button>Shop Now</button>
          </div>
        </div>
      </Card>
      <Card className='relative'>
        <Image className='m-5'
          alt='product3 image'
          src={'/images/controler.jpg'}
          width={280}
          height={265}
        />
        <div className='absolute flex top-10 left-14 flex-col justify-center align-middle'>
          <div className='text-black text-lg'>30% OFF</div>
          <div className='text-black text-3xl font-medium'>Smart Device</div>
          <div className='shopnow w-32'>
            <button>Shop Now</button>
          </div>
        </div>
      </Card>
      <Card className='relative'>
        <Image className='m-5'
          alt='product4 image'
          src={'/images/controler2.jpg'}
          width={280}
          height={265}
        />
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
