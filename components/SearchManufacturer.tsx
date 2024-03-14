import { Combobox, Transition } from '@headlessui/react';
import Image from 'next/image';
import React, { useState, Fragment } from 'react';
import { manufacturers } from '@/constants';

interface SearchManufacturerProps {
  onSearch: (manufacturer: string) => void; // Define onSearch prop
}

const SearchManufacturer: React.FC<SearchManufacturerProps> = ({
  onSearch,
}) => {
  const [query, setQuery] = useState('');

  const filteredManufacturers =
    query === ''
      ? manufacturers
      : manufacturers.filter((item) =>
          item
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        );

  return (
    <div className="search-manufacturer">
      <Combobox>
        <div className="relative w-96">
          <Combobox.Button className="absolute top-[14px]">
            <Image
              src="/beerlogo.svg"
              width={20}
              height={20}
              className="ml-4"
              alt="beer logo"
            />
          </Combobox.Button>
          <Combobox.Input
            className="search-manufacturer__input w-full py-2 pl-10 pr-4 border border-gray-300 focus:outline-none focus:ring focus:border-blue-500"
            placeholder="Search manufacturer..."
            onChange={(e) => setQuery(e.target.value)}
          />

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery('')}
          >
            <Combobox.Options className="mt-1 w-full bg-white border border-gray-300 shadow-lg max-h-48 overflow-y-auto z-10 divide-y divide-gray-200 focus:outline-none">
              {filteredManufacturers.map((item) => (
                <Combobox.Option
                  key={item}
                  className="relative search-manufacturer__option text-gray-900"
                  value={item}
                  onClick={() => onSearch(item)} // Call onSearch with selected manufacturer
                >
                  {item}
                </Combobox.Option>
              ))}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufacturer;
