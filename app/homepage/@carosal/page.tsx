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
          <div className='shopnow'>
            <button><Link  href={'/products'}>Shop Now</Link></button>
          </div>
        </div>
    </div>
    </>
  )
}

export default Carosal