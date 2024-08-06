'use client'
import React, { ReactNode } from 'react'
import { useQuery } from '@tanstack/react-query'
import { fetchData } from '../apis/getdata'
import SkeletonLoader from '../components/loader'
import ProductCard from '../components/productcard'
import ButtonComponent from '../components/button'
import { addtocart } from '../_liab/features/cardslice'
import { useDispatch } from 'react-redux'
interface product {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
  button: ReactNode 
}

const Products = () => {
  const url = 'https://dummyjson.com/products/category/mobile-accessories';
    const { data, isPending, error } = useQuery({
        queryKey: ['alldata'],
        queryFn: () => fetchData(url),
    });

    const dispatch = useDispatch();

    if (isPending) return <SkeletonLoader/>;
    if (error) return <p>Error: {error.message}</p>;

    const handleAddToCart = (product: product) => {
      const { id, title, price } = product;
      dispatch(addtocart({ id, title, price }));
    };
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
            thumbnail={product.thumbnail} 
            button={<ButtonComponent onClick={()=>handleAddToCart(product)}>Add to cart</ButtonComponent>}
            />
        ))
      )}
    </div>
  )
}

export default Products