'use client';
import React, { useState } from 'react';
import Beer from './Beer';
import { IBeer } from '@/types/beers';
import SearchBar from './SearchBar';

interface ToDoListProps {
  beers: IBeer[];
}

const ITEMS_PER_PAGE = 9;

const ToDoList: React.FC<ToDoListProps> = ({ beers }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredManufacturer, setFilteredManufacturer] = useState('');

  const handleSearch = (manufacturer: string) => {
    setFilteredManufacturer(manufacturer); // Set the selected manufacturer
  };

  const filteredBeers = filteredManufacturer // Filter beers based on selected manufacturer
    ? beers.filter((beer) => beer.text === filteredManufacturer)
    : beers;

  const totalPages = Math.ceil(filteredBeers.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentBeers = filteredBeers.slice(startIndex, endIndex);

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  return (
    <div className="overflow-x-auto ">
      <SearchBar onSearch={handleSearch} />
      <div className="beer-card group flex flex-wrap">
        {currentBeers.map((beer, index) => (
          <div
            key={beer.id}
            className={`beer-card__content w-1/3 p-4 bg-zinc-50 pb-10 rounded-lg ${
              index !== currentBeers.length ? 'mb-4 font-bold' : ''
            }`}
          >
            <Beer beer={beer} />
            <p className="italic text-sm font-light">Beer flavour</p>
            <div className="relative w-full h-40 my-3 object-contain">
              <img
                src="/beer_transparent_01.png"
                alt="beer model"
                className="fill cover"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between mt-10">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className={`px-5 py-1 rounded ${
            currentPage === 1
              ? 'bg-gray-300 cursor-not-allowed'
              : 'bg-orange-400 hover:bg-orange-500 ease-in duration-300 text-white'
          }`}
        >
          Prev
        </button>
        <span>{`Page ${currentPage} of ${totalPages}`}</span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={`px-5 py-1 rounded ${
            currentPage === totalPages
              ? 'bg-gray-300 cursor-not-allowed'
              : 'bg-orange-400 hover:bg-orange-500 ease-in duration-300 text-white'
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ToDoList;
