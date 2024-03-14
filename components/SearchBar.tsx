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
    onSearch(''); // Pass an empty string to indicate showing all items
  };

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer onSearch={setManufacturer} />
      </div>
      <button type="submit">Search</button>
      <button type="button" onClick={handleReset}>
        Reset
      </button>
    </form>
  );
};

export default SearchBar;
