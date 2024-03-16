'use client';
import React, { useState } from 'react';
import SearchManufacturer from './SearchManufacturer';

interface SearchBarProps {
  onSearch: (manufacturer: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [manufacturer, setManufacturer] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const searchManufacturer =
      manufacturer.trim() === '' ? 'all' : manufacturer.trim();
    onSearch(searchManufacturer);
  };

  const handleReset = () => {
    setManufacturer('');
    onSearch('');
  };

  return (
    <form
      className="searchbar flex justify-between items-center"
      onSubmit={handleSearch}
    >
      <div className="searchbar__item pt-6 pb-6">
        <SearchManufacturer onSearch={setManufacturer} />
      </div>
      <div className="flex items-center">
        <div className="flex-grow"></div> {/* This takes up remaining space */}
        <button
          type="submit"
          className="bg-slate-400 hover:bg-slate-500 text-white font-bold py-2 px-4 rounded ease-in duration-300"
        >
          Search
        </button>
        <button
          type="button"
          onClick={handleReset}
          className="ml-4 bg-slate-400 hover:bg-slate-500 text-white font-bold py-2 px-4 rounded ease-in duration-300"
        >
          Reset
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
