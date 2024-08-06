'use client'
import React, { ReactNode, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { fetchData } from '@/app/apis/getdata'
import SkeletonLoader from '@/app/components/loader'
import ProductCard from '@/app/components/productcard'
import ButtonComponent from '@/app/components/button'
import { addtocart } from '@/app/_liab/features/cardslice'
import { useDispatch, useSelector } from 'react-redux'
import { searchitem } from '@/app/_liab/features/searchslice'
import ReusableModal from '../components/modal'
import { useRouter } from 'next/navigation'

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
    const [isOpenModal,setisOpenModal] = useState(false)
    const router = useRouter()

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
      setisOpenModal(true)
    };

    const handleModalClose = ()=>{
      setisOpenModal(false)
    }


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

      <div>
        <ReusableModal isOpen={isOpenModal} onClose={handleModalClose}>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <div className="mb-4 flex justify-center">
              <h1 className=" md:text-xl font-semibold">Product added to cart</h1>
            </div>
            <div className="flex space-x-4 justify-center">
              <div>
                <button onClick={handleModalClose} className="md:text-base px-4 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-xs">
                  Continue Shopping
                </button>
              </div>
              <div>
                <ButtonComponent onClick={()=>router.push('/cart')} className='bg-green-600 hover:bg-green-700 py-2 transition-colors duration-300 ease-in-out text-xs md:text-base'>
                  View cart
                </ButtonComponent>
              </div>
            </div>
          </div>
        </ReusableModal>
      </div>
    </div>
  )
}

export default SearchedProducts