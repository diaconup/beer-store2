'use client';

import React, { useState } from 'react';
import Beer from './Beer';
import { IBeer } from '@/types/beers';

interface ToDoListProps {
  beers: IBeer[];
}

const ITEMS_PER_PAGE = 10; // Number of items to display per page

const ToDoList: React.FC<ToDoListProps> = ({ beers }) => {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate total number of pages
  const totalPages = Math.ceil(beers.length / ITEMS_PER_PAGE);

  // Calculate index range for the current page
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  // Slice the beers array to get the beers for the current page
  const currentBeers = beers.slice(startIndex, endIndex);

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  return (
    <div className="overflow-x-auto">
      <table className="table w-full border-collapse border border-gray-400">
        {/* head */}
        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-2">Brand</th>
            <th className="px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {currentBeers.map((beer) => (
            <Beer key={beer.id} beer={beer} />
          ))}
        </tbody>
      </table>
      {/* Pagination controls */}
      <div className="flex justify-between mt-4">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className={`px-3 py-1 rounded ${
            currentPage === 1
              ? 'bg-gray-300 cursor-not-allowed'
              : 'bg-blue-500 hover:bg-blue-600 text-white'
          }`}
        >
          Prev
        </button>
        <span>{`Page ${currentPage} of ${totalPages}`}</span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={`px-3 py-1 rounded ${
            currentPage === totalPages
              ? 'bg-gray-300 cursor-not-allowed'
              : 'bg-blue-500 hover:bg-blue-600 text-white'
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ToDoList;
