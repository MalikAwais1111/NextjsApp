'use client'
import React, { useEffect, useState } from 'react';
import ProductCard from '@/app/components/productcard';
import SkeletonLoader from '@/app/components/loader';


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

  if (loading) return <p><SkeletonLoader/></p>;
  if (error) return <p>Error: {error}</p>;

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
            thumbnail={product.thumbnail} // Pass the thumbnail prop
          />
        ))
      )}
    </div>
  );
}

export default Productid;
