import React, { useState, useEffect, useCallback, useMemo } from 'react';
import Card from '../components/Card';
import Pagination from '../components/Pagination';
import Filters from '../components/Filters/index.tsx';
import InputSearch from '../components/InputSearch/index.tsx';
import Heading from '../components/Heading/index.tsx';
import { filterOptions } from '../utils/consts.ts';
import { products } from "../utils/mockdata.ts";
import { Products } from '../types.ts';

const ITEMS_PER_PAGE = 8;

const Home: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    setCurrentPage(1);
    // when debounced searchQuery changes, user has stopped typing
    setIsTyping(false);
  }, [searchQuery]);

  const memoizedFilteredProducts = useMemo(() => {
    return products.filter((product: Products) => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesFilter = selectedFilter === 'all' || product.origin === selectedFilter;
      return matchesFilter && matchesSearch;
    });
  }, [searchQuery, selectedFilter]);

  const totalPages = Math.ceil(memoizedFilteredProducts.length / ITEMS_PER_PAGE);

  const memoizedCurrentProducts = useMemo(() => {
    return memoizedFilteredProducts.slice(
      (currentPage - 1) * ITEMS_PER_PAGE,
      currentPage * ITEMS_PER_PAGE
    );
  }, [memoizedFilteredProducts, currentPage]);

  const handlePageChange = useCallback((newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  }, [totalPages]);

  const handleFilterChange = useCallback((filterId: string) => {
    setSelectedFilter(filterId);
  }, []);

  const handlePrevPageClick = useCallback(() => {
    handlePageChange(currentPage - 1);
  }, [currentPage, handlePageChange]);

  const handleNextPageClick = useCallback(() => {
    handlePageChange(currentPage + 1);
  }, [currentPage, handlePageChange]);

  const loadItems = (): React.ReactNode => {
    return Array.from({ length: ITEMS_PER_PAGE }).map((_, i) => (
      <div key={i} className="max-w-sm bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow overflow-hidden">
        <div style={{ aspectRatio: '4/3', width: '100%' }} className="bg-gray-200 dark:bg-gray-700 animate-pulse" />
        <div className="p-5 min-h-[150px]">
          <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded mb-2 w-3/4 animate-pulse" />
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mb-3 animate-pulse" />
          <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/3 animate-pulse" />
        </div>
      </div>
    ));
  }

  return (
    <div className="w-full transition-colors duration-200">
      <div className='flex items-baseline justify-center'>
        <div className="mb-3 mr-5">
          <Heading text={"Here you will find all the products we offer."} className="text-gray-900 dark:text-white" />
        </div>
        <div className="relative hidden md:block">
          <InputSearch 
            placeholder={"Search products..."} 
            onDebouncedChange={setSearchQuery} 
            onInputChange={(typing: boolean) => setIsTyping(typing)}
            className="dark:bg-gray-800 dark:text-white"
          />
        </div>
      </div>

      <div className='flex justify-center'>
        <Filters filterOptions={filterOptions} onFilterChange={handleFilterChange} />
      </div>

      {isTyping ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 min-h-[500px]">
          {loadItems()}
        </div>
      ) : memoizedCurrentProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 min-h-[500px]">
          {memoizedCurrentProducts.map((product: Products) => (
            <Card
              key={product.id}
              title={product.name}
              price={product.price_per_kg}
              image={product.image}
              origin={product.origin}
              id={product.id}
            />
          ))}
        </div>
      ) : (
        <p className="text-center font-bold text-lg min-h-[500px]">No results found!</p>
      )}

      <div className='mb-12'>
        <Pagination 
          pages={`Page ${currentPage} of ${totalPages}`}
          handlePreviousPage={handlePrevPageClick} 
          handleNextPage={handleNextPageClick}
        />
      </div>
    </div>
  );
};

export default Home;