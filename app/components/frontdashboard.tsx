import React from 'react'
import Image from 'next/image'
import Card from './card'
import '../globals.css'

const Frontview = () => {
  return (
  <>
    <div className="backgroundImage">
        <div className='maindiv'>
          <div className='latest'>Latest Best Devices</div>
          <div className='trending'>Trending products for sale!</div>
          <div className='off'>50% OFF</div>
          <div className='shopnow'>
            <button>Shop Now</button>
          </div>
        </div>
    </div>
    <div className='mt-24 mb-24 flex flex-wrap ml-14'>
      <Card className='relative'>
          <Image className='m-5'
          alt='produt1 image'
          src={'/images/watch1.jpg'}
          width={280}
          height={265}
          >
          </Image>
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
          alt='produt2 image'
          src={'/images/mobile1.jpg'}
          width={280}
          height={265}
          >
          </Image>
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
          alt='produt3 image'
          src={'/images/controler.jpg'}
          width={280}
          height={265}
          >
          </Image>
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
          alt='produt4 image'
          src={'/images/controler2.jpg'}
          width={280}
          height={265}
          >
          </Image>
          <div className='absolute flex top-10 left-14 flex-col justify-center align-middle'>
            <div className='text-black text-lg'>20% OFF</div>
            <div className='text-black text-3xl font-medium'>Headphones</div>
            <div className='shopnow w-32'>
              <button>Shop Now</button>
            </div>
          </div>
      </Card>
      <div className='w-full mt-20 text-center'>
        <div className='text-xl text-red-600 mb-4'>Products</div>
        <div className='text-4xl font-medium text-black'>Our Hot Products</div>
      </div>
    </div>
  </>
  )
}

export default Frontview
