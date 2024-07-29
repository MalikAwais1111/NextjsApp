import React from 'react'
import Link from 'next/link'
import '../global.css'

const Carosal = () => {
  return (
    <>
    <div className="backgroundImage">
        <div className='maindiv'>
          <div className='latest'>Latest Best Devices</div>
          <div className='trending'>Trending products for sale!</div>
          <div className='off'>50% OFF</div>
          <Link href={'/products'}>
          <div className='shopnow w-32'>
            <button>Shop Now</button>
          </div>
          </Link>
        </div>
    </div>
    </>
  )
}

export default Carosal