'use client';

import { useState, useEffect } from 'react';
import CarList from '@/components/cars/CarList';
import FilterPanel from '@/components/filters/FilterPanel';
import Pagination from '@/components/ui/Pagination';
import { getCars } from '@/lib/api';

export default function CarsPage() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [filters, setFilters] = useState({
    make: '',
    model: '',
    fuelType: '',
    driveType: '',
    minPrice: '',
    maxPrice: '',
    year: ''
  });

  useEffect(() => {
    fetchCars();
  }, [currentPage, filters]);

  const fetchCars = async () => {
    try {
      setLoading(true);
      const response = await getCars({
        page: currentPage,
        limit: 10,
        ...filters
      });
      
      setCars(response.cars);
      setTotalPages(response.totalPages);
      setLoading(false);
    } catch (err) {
      setError('Failed to load cars. Please try again.');
      setLoading(false);
    }
  };

  const handleFilterChange = (newFilters) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
    setCurrentPage(1); // Reset to first page when filters change
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Car Catalogue</h1>
      <p className="text-gray-600 mb-8">Explore our cars you might like</p>
      
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/4">
          <FilterPanel filters={filters} onFilterChange={handleFilterChange} />
        </div>
        
        <div className="lg:w-3/4">
          {loading ? (
            <div className="flex justify-center items-center min-h-[400px]">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          ) : error ? (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
              {error}
            </div>
          ) : (
            <>
              <CarList cars={cars} />
              <Pagination 
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}