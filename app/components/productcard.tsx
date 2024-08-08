import React, { ReactNode } from 'react';
import Image from 'next/image';

interface ProductCardProps {
  title: string;
  description: string;
  price: string;
  rating: number;
  stock: number;
  thumbnail: string;
  button: ReactNode
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  description,
  price,
  rating,
  stock,
  thumbnail,
  button
}) => {
  return (
    <div className='border rounded-md shadow-lg overflow-hidden flex flex-col h-full'>
      <Image 
        src={thumbnail} 
        alt={title} 
        width={500} 
        height={500} 
        className='w-full object-cover' 
      />
      <div className='p-4 flex-1 flex flex-col'>
        <h3 className='text-xl font-bold'>{title}</h3>
        <p className='text-gray-600 flex-1'>{description}</p>
        <div className='mt-2 flex justify-between items-center'>
          <span className='text-lg font-semibold'>{price}</span>
          <div className='flex items-center'>
            <span className='text-yellow-500'>{'★'.repeat(Math.round(rating))}</span>
            <span className='text-gray-500'> ({rating})</span>
          </div>
        </div>
        <div className='mt-auto flex justify-between items-center pt-4'>
          <p className='text-gray-600'>Stock: {stock}</p>
          {button}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
