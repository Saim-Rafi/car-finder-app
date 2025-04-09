import { useState } from 'react';

export default function FilterPanel({ filters, onFilterChange }) {
  const [localFilters, setLocalFilters] = useState(filters);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLocalFilters(prev => ({ ...prev, [name]: value }));
  };

  const handleApplyFilters = () => {
    onFilterChange(localFilters);
  };

  const handleClearFilters = () => {
    const clearedFilters = {
      make: '',
      model: '',
      fuelType: '',
      driveType: '',
      minPrice: '',
      maxPrice: '',
      year: ''
    };
    setLocalFilters(clearedFilters);
    onFilterChange(clearedFilters);
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-4">Filters</h2>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Make
          </label>
          <input
            type="text"
            name="make"
            value={localFilters.make}
            onChange={handleInputChange}
            placeholder="e.g. Volkswagen"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Model
          </label>
          <input
            type="text"
            name="model"
            value={localFilters.model}
            onChange={handleInputChange}
            placeholder="e.g. Tiguan"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Fuel Type
          </label>
          <select
            name="fuelType"
            value={localFilters.fuelType}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Fuel Types</option>
            <option value="Gas">Gas</option>
            <option value="Electricity">Electricity</option>
            <option value="Hybrid">Hybrid</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Drive Type
          </label>
          <select
            name="driveType"
            value={localFilters.driveType}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Drive Types</option>
            <option value="FWD">FWD</option>
            <option value="RWD">RWD</option>
            <option value="AWD">AWD</option>
          </select>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Min Price ($)
            </label>
            <input
              type="number"
              name="minPrice"
              value={localFilters.minPrice}
              onChange={handleInputChange}
              placeholder="Min"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Max Price ($)
            </label>
            <input
              type="number"
              name="maxPrice"
              value={localFilters.maxPrice}
              onChange={handleInputChange}
              placeholder="Max"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Year
          </label>
          <select
            name="year"
            value={localFilters.year}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Years</option>
            {[...Array(6)].map((_, i) => {
              const year = new Date().getFullYear() - i;
              return (
                <option key={year} value={year}>
                  {year}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      
      <div className="mt-6 space-y-3">
        <button
          onClick={handleApplyFilters}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition"
        >
          Apply Filters
        </button>
        
        <button
          onClick={handleClearFilters}
          className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded-md transition"
        >
          Clear Filters
        </button>
      </div>
      
      <div className="mt-6">
        <button className="w-full bg-black text-white font-medium py-2 px-4 rounded-md">
          Custom Filter
        </button>
      </div>
    </div>
  );
}
