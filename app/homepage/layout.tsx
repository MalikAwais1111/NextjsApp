import React from 'react'

const Home = ({
    children,
    carosal,
    offers,
    topproducts,
}:{
    children: React.ReactNode
    carosal: React.ReactNode
    offers: React.ReactNode
    topproducts: React.ReactNode
}) => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="mb-4">
        {children}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div className="bg-white p-4 rounded-lg shadow-md">
          {carosal}
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          {offers}
        </div>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md">
        {topproducts}
      </div>
    </div>
  ) 
}

export default Home
