'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { getCarById } from '@/lib/api';
import { addToWishlist, removeFromWishlist, isInWishlist } from '@/lib/wishlist';
import CarGallery from '@/components/cars/CarGallery';
import CarSpecifications from '@/components/cars/CarSpecifications';
import WishlistButton from '@/components/ui/WishlistButton';

export default function CarDetailsPage() {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [inWishlist, setInWishlist] = useState(false);

  useEffect(() => {
    const fetchCarDetails = async () => {
      try {
        setLoading(true);
        const carData = await getCarById(id);
        setCar(carData);
        setInWishlist(isInWishlist(id));
        setLoading(false);
      } catch (err) {
        setError('Failed to load car details');
        setLoading(false);
      }
    };

    fetchCarDetails();
  }, [id]);

  const handleWishlist = () => {
    if (inWishlist) {
      removeFromWishlist(id);
    } else {
      addToWishlist({
        id: car._id,
        make: car.make,
        model: car.model,
        price: car.price,
        image: car.images[0]
      });
    }
    setInWishlist(!inWishlist);
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8 flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error || !car) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {error || 'Car not found'}
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="lg:w-2/3">
          <CarGallery images={car.images} />
        </div>
        
        <div className="lg:w-1/3">
          <h1 className="text-3xl font-bold mb-2">{car.make} {car.model}</h1>
          <p className="text-gray-600 mb-4">{car.year}</p>
          
          <div className="flex items-center mb-6">
            <span className="text-3xl font-bold">${car.price}</span>
            <span className="text-gray-600 ml-1">/day</span>
          </div>
          
          <WishlistButton 
            inWishlist={inWishlist} 
            onClick={handleWishlist} 
          />
          
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Specifications</h2>
            <CarSpecifications car={car} />
          </div>
          
          <button className="mt-8 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded transition">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}