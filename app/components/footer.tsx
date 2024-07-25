'use client'
import React, { Suspense } from 'react'
import ViewportComponent from './viewport'

const Footer = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ViewportComponent />
    </Suspense>
  )
}

export default Footer
