'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getWishlist, removeFromWishlist } from '@/lib/wishlist';

export default function WishlistPage() {
  const [wishlistItems, setWishlistItems] = useState([]);
  
  useEffect(() => {
    setWishlistItems(getWishlist());
    
    // Add event listener to update wishlist on storage change
    const handleStorageChange = () => {
      setWishlistItems(getWishlist());
    };
    
    window.addEventListener('storage', handleStorageChange);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);
  
  const handleRemoveFromWishlist = (carId) => {
    removeFromWishlist(carId);
    setWishlistItems(getWishlist());
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Wishlist</h1>
      
      {wishlistItems.length === 0 ? (
        <div className="text-center py-16">
          <svg 
            className="w-16 h-16 mx-auto text-gray-400 mb-4" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" 
            />
          </svg>
          <h2 className="text-2xl font-medium text-gray-600 mb-4">Your wishlist is empty</h2>
          <p className="text-gray-500 mb-8">Start adding cars you like to your wishlist</p>
          <Link 
            href="/cars" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-md transition"
          >
            Browse Cars
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlistItems.map(car => (
            <div key={car.id} className="bg-white rounded-lg overflow-hidden shadow">
              <div className="p-4">
                <h3 className="text-xl font-bold mb-1">{car.make} {car.model}</h3>
                <div className="mb-4">
                  <span className="text-2xl font-bold">${car.price}</span>
                  <span className="text-gray-600">/day</span>
                </div>
                
                <div className="relative aspect-[16/10] mb-4">
                  <Image 
                    src={car.image || '/images/car-placeholder.png'} 
                    alt={`${car.make} ${car.model}`}
                    fill
                    className="object-contain"
                  />
                </div>
                
                <div className="flex space-x-2">
                  <Link 
                    href={`/cars/${car.id}`}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md text-center transition"
                  >
                    View Details
                  </Link>
                  
                  <button 
                    onClick={() => handleRemoveFromWishlist(car.id)}
                    className="bg-white hover:bg-gray-100 text-gray-800 font-medium py-2 px-3 border border-gray-300 rounded-md transition"
                  >
                    <svg 
                      className="w-5 h-5 text-red-500" 
                      fill="currentColor" 
                      viewBox="0 0 20 20" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path 
                        fillRule="evenodd" 
                        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" 
                        clipRule="evenodd" 
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
