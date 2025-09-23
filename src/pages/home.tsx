import React, { useState } from 'react';
import Card from '../components/Card';
import Pagination from '../components/Pagination';
import Filters from '../components/Filters/index.tsx';
import InputSearch from '../components/InputSearch/index.tsx';
import Heading from '../components/Heading/index.tsx';
import { filterOptions } from '../utils/consts.ts';
import { products } from "../utils/mockdata.ts"
import { ProductsT } from '../types.ts'

const ITEMS_PER_PAGE = 8;

const Home: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredProducts = products.filter((product: ProductsT) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = selectedFilter === 'all' || product.origin === selectedFilter;
    return matchesFilter && matchesSearch;
  });

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);

  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const handleFilterChange = (filterId: string) => {
    setSelectedFilter(filterId);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1);
  }

  return (
    <div className="w-full">
        <div className='flex items-baseline justify-center'>
            <div className="mb-3 mr-5">
                <Heading text={"Here you will find all the products we offer."} />
            </div>
             <div className="relative hidden md:block">
                <InputSearch placeholder={"Search products..."} value={searchQuery} onChange={handleSearchChange} />
            </div>
        </div>
        <div className='flex justify-center'>
            <Filters filterOptions={filterOptions} onFilterChange={handleFilterChange} />
        </div>
            {currentProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 mx-auto" style={{ minHeight: "500px"}}>
                    {currentProducts.map((product: ProductsT, index: number) => (
                        <Card 
                            key={index} 
                            title={product.name} 
                            price={product.price_per_kg} 
                            image={product.image} 
                            origin={product.origin}
                            id={product.id}
                        />
                    ))}
                </div>
                ) : (
                <p className="text-center font-bold text-lg" style={{ minHeight: "500px"}}>No results found!</p>
            )}
        <div className='mb-12'>
            <Pagination 
                pages={`Page ${currentPage} of ${totalPages}`}
                handlePreviousPage={() => handlePageChange(currentPage - 1)} 
                handleNextPage={() => handlePageChange(currentPage + 1)}
            />
        </div>
    </div>
  );
};

export default Home;