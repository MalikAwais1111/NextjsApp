'use client'
import React, { useEffect, useState } from 'react';
import ProductCard from '@/app/components/productcard';
import SkeletonLoader from '@/app/components/loader';
import ButtonComponent from '@/app/components/button';
import { useDispatch } from 'react-redux';
import { addtocart } from '@/app/_liab/features/cardslice';
import ReusableModal from '@/app/components/modal';
import { useRouter } from 'next/navigation';


interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  stock: number;
  thumbnail: string; 
}

const Productid = ({ params }: { params: { productcategory: string } }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isOpenModal,setisOpenModal] = useState(false)

  const router = useRouter()

  useEffect(() => {
    setLoading(true);
    fetch(`https://dummyjson.com/products/category/${params.productcategory}`)
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then(data => {
        if (data && data.products) {
          setProducts(data.products);
        } else {
          setProducts([]);
          setError('No products found');
        }
      })
      .catch(error => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  },[params.productcategory]);

  const dispatch = useDispatch()

  if (loading) return <p><SkeletonLoader/></p>;
  if (error) return <p>Error: {error}</p>;

  const handleAddToCart = (product: Product) => {
    const { id, title, price } = product;
    dispatch(addtocart({ id, title, price }));
    setisOpenModal(true)
  };

  const handleModalClose = ()=>{
    setisOpenModal(false)
  }

  return (
    <div className='p-4 mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
      {products.length === 0 ? (
        <p>No products available.</p>
      ) : (
        products.map((product) => (
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
  );
}

export default Productid;
