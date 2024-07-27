import React from 'react';

interface ProductCardProps {
  title: string;
  description: string;
  price: string;
  rating: number;
  stock: number;
  thumbnail: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  description,
  price,
  rating,
  stock,
  thumbnail
}) => {
  return (
    <div className='border rounded-md shadow-lg overflow-hidden flex flex-col h-full'>
      <img src={thumbnail} alt={title} className='w-full object-cover' />
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
          <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <svg className="w-3.5 h-3.5 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
              <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z"/>
            </svg>
            Buy now
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
