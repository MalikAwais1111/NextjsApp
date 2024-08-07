'use client'
import React, { ReactNode, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { fetchData } from '../apis/getdata'
import SkeletonLoader from '../components/loader'
import ProductCard from '../components/productcard'
import ButtonComponent from '../components/button'
import { addtocart } from '../_liab/features/cardslice'
import { useDispatch } from 'react-redux'
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

const Products = () => {
  const url = 'https://dummyjson.com/products/category/mobile-accessories';
    const { data, isPending, error } = useQuery({
        queryKey: ['alldata'],
        queryFn: () => fetchData(url),
    });

    const [isOpenModal,setisOpenModal] = useState(false)
    const dispatch = useDispatch();
    const router = useRouter()

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
              <button 
                type="button" 
                onClick={()=>router.push('/cart')}
                className={`md:text-base text-xs text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg  px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-green-500 dark:hover:bg-green-600 dark:focus:ring-green-700`}
              >
                <svg className="w-3.5 h-3.5 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
                  <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z"/>
                </svg>
                Add to cart
              </button>
              </div>
            </div>
          </div>
        </ReusableModal>
      </div>
    </div>
  )
}

export default Products