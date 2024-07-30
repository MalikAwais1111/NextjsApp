'use client'
import React, { useEffect, useState } from 'react';
import ProductCard from '@/app/components/productcard';
import SkeletonLoader from '@/app/components/loader';
import ButtonComponent from '@/app/components/button';
import { useDispatch } from 'react-redux';
import { addtocart } from '@/app/_liab/features/cardslice';


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
    alert("Added to cart");
  };

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
            button={<ButtonComponent onClick={()=>handleAddToCart(product)}>Buy now</ButtonComponent>}
          />
        ))
      )}
    </div>
  );
}

export default Productid;
