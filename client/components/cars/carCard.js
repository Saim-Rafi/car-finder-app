import Link from 'next/link';
import Image from 'next/image';
import { addToWishlist, removeFromWishlist, isInWishlist } from '@/lib/wishlist';
import { useState, useEffect } from 'react';

export default function CarCard({ car }) {
  const [inWishlist, setInWishlist] = useState(false);
  
  useEffect(() => {
    setInWishlist(isInWishlist(car._id));
  }, [car._id]);

  const handleWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (inWishlist) {
      removeFromWishlist(car._id);
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

  return (
    <Link href={`/cars/${car._id}`}>
      <div className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition">
        <div className="p-4">
          <h3 className="text-xl font-bold mb-1">{car.make} {car.model}</h3>
          <div className="mb-4">
            <span className="text-2xl font-bold">${car.price}</span>
            <span className="text-gray-600">/day</span>
          </div>
          
          <div className="relative aspect-[16/10] mb-4">
            <Image 
              src={car.images[0] || '/images/car-placeholder.png'} 
              alt={`${car.make} ${car.model}`}
              fill
              className="object-contain"
            />
          </div>
          
          <div className="grid grid-cols-3 gap-2">
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mb-1">
                <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <span className="text-sm text-gray-600">Automatic</span>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mb-1">
                <svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
              </div>
              <span className="text-sm text-gray-600">{car.driveType}</span>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mb-1">
                <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <span className="text-sm text-gray-600">{car.mpg} MPG</span>
            </div>
          </div>
          
          <button 
            onClick={handleWishlist}
            className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full shadow flex items-center justify-center"
          >
            <svg 
              className={`w-5 h-5 ${inWishlist ? 'text-red-500 fill-current' : 'text-gray-400'}`} 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" 
              />
            </svg>
          </button>
        </div>
      </div>
    </Link>
  );
}
