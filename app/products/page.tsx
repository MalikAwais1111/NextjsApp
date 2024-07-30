'use client'
import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { fetchData } from '../apis/getdata'
import SkeletonLoader from '../components/loader'
import ProductCard from '../components/productcard'
interface product {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  stock: number;
  thumbnail: string; 
}

const Products = () => {
  const url = 'https://dummyjson.com/products/category/mobile-accessories';
    const { data, isPending, error } = useQuery({
        queryKey: ['alldata'],
        queryFn: () => fetchData(url),
    });

    if (isPending) return <SkeletonLoader/>;
    if (error) return <p>Error: {error.message}</p>;

  return (
    <div className='p-4 mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
      {data && data.length === 0 ? (
        <p>No products available.</p>
      ) : (
        data.map((product:product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            description={product.description}
            price={`$${product.price}`}
            rating={product.rating}
            stock={product.stock}
            thumbnail={product.thumbnail} // Pass the thumbnail prop
          />
        ))
      )}
    </div>
  )
}

export default Products