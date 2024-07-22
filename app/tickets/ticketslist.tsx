import React, { useState, useEffect, useRef } from 'react';
import Loader from '../components/loader';
import ReusableModal from '../components/modal';

interface Item {
  id: number;
  title: string;
  completed: boolean;
}

const Ticketslist: React.FC = () => {
  const [data, setData] = useState<Item[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedTodo, setSelectedTodo] = useState<Item | null>(null); // State to store the selected todo
  const [showModal, setShowModal] = useState(false); // State to control modal visibility
  const itemsPerPage = 20;
  const modalRef = useRef<HTMLDivElement>(null); // Ref for modal

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        // Clicked outside the modal
        setShowModal(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleClick = (item: Item) => {
    setSelectedTodo(item);
    setShowModal(true); // Show modal when a todo item is clicked
  };

  const handleModalClose = () => {
    setShowModal(false); // Close modal
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  return (
    <div className="container mx-auto px-4 py-8">
      {currentItems.length > 0 ? (
        currentItems.map((item) => (
          <div key={item.id} className="mb-4 p-4 border rounded">
            <h1 className="text-xl font-bold">Ticket Details</h1>
            <p className="text-gray-700">ID: {item.id}</p>
            <p className="text-gray-700">Title: {item.title}</p>
            <p className="text-gray-700">Completed: {item.completed ? 'Yes' : 'No'}</p>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2"
              onClick={() => handleClick(item)} // Pass the item to handleClick
            >
              View Details
            </button>
          </div>
        ))
      ) : (
        <Loader />
      )}

      {/* Modal */}
      <ReusableModal isOpen={showModal} onClose={handleModalClose}>
        <div ref={modalRef} className="bg-white p-8 max-w-md mx-auto rounded-lg">
          <h1 className="text-xl font-bold mb-4">Todo Details</h1>
          {selectedTodo && (
            <>
              <p className="text-gray-700">ID: {selectedTodo.id}</p>
              <p className="text-gray-700">Title: {selectedTodo.title}</p>
              <p className="text-gray-700">Completed: {selectedTodo.completed ? 'Yes' : 'No'}</p>
            </>
          )}
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4"
            onClick={handleModalClose}
          >
            Close
          </button>
        </div>
      </ReusableModal>

      {/* Pagination */}
      <div className="mt-4 flex justify-center">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => setCurrentPage(index + 1)}
            className={`mx-2 px-4 py-2 rounded-lg ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Ticketslist;
