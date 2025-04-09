'use client';

import { useState, useEffect } from 'react';
import CarCard from './carCard';
import { getCars } from '@/lib/api';

export default function FeaturedCars() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeaturedCars = async () => {
      try {
        const response = await getCars({ limit: 4 });
        setCars(response.cars);
        setLoading(false);
      } catch (err) {
        console.error('Failed to fetch featured cars:', err);
        setLoading(false);
      }
    };

    fetchFeaturedCars();
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="bg-gray-100 rounded-lg h-64 animate-pulse"></div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {cars.map(car => (
        <CarCard key={car._id} car={car} />
      ))}
    </div>
  );
}
