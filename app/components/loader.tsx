import React from 'react';

const Loader = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-50 z-50">
      <div className="animate-pulse flex flex-col items-center gap-4 w-60 bg-white p-4 rounded-lg shadow-lg">
        <div>
          <div className="w-full h-6 bg-gray-300 rounded-md"></div>
          <div className="w-full h-4 bg-gray-300 mx-auto mt-3 rounded-md"></div>
        </div>
        <div className="h-7 bg-gray-300 w-full rounded-md"></div>
        <div className="h-7 bg-gray-300 w-full rounded-md"></div>
        <div className="h-7 bg-gray-300 w-full rounded-md"></div>
        <div className="h-7 bg-gray-300 w-1/2 rounded-md"></div>
      </div>
    </div>
  );
}

export default Loader;
