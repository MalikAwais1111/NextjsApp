import React, { ReactNode } from 'react';

interface ReusableModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const ReusableModal: React.FC<ReusableModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded-lg shadow-lg max-w-md w-full">
        <div className="flex justify-end">
          <button className="text-gray-500 hover:text-gray-700 focus:outline-none" onClick={onClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
};

export default ReusableModal;
