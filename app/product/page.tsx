'use client'
import React, { ReactNode } from 'react'
import { useQuery } from '@tanstack/react-query'
import { fetchData } from '@/app/apis/getdata'
import SkeletonLoader from '@/app/components/loader'
import ProductCard from '@/app/components/productcard'
import ButtonComponent from '@/app/components/button'
import { addtocart } from '@/app/_liab/features/cardslice'
import { useDispatch, useSelector } from 'react-redux'
import { searchitem } from '@/app/_liab/features/searchslice'

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

interface searchitem {
    id: number
    title: string
    price: number
    count: number
  }
  
  interface searchstate{
    search:{
      search: searchitem[]
    }
  }

const SearchedProducts = () => {

    const searched = useSelector((state:searchstate) => state.search.search)

  const url = `https://dummyjson.com/products/search?q=${searched}`;
    const { data, isPending, error } = useQuery({
        queryKey: [searched],
        queryFn: () => fetchData(url),
    });

    const dispatch = useDispatch();

    if (isPending) return <SkeletonLoader/>;
    if (error) return <p>Error: {error.message}</p>;

    const handleAddToCart = (product: product) => {
      const { id, title, price } = product;
      dispatch(addtocart({ id, title, price }));
      alert("Added to cart");
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
            button={<ButtonComponent onClick={()=>handleAddToCart(product)}>Buy now</ButtonComponent>}
            />
        ))
      )}
    </div>
  )
}

export default SearchedProducts