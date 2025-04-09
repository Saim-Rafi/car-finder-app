import { useState } from 'react';
import Image from 'next/image';

export default function CarGallery({ images }) {
  const [activeImage, setActiveImage] = useState(0);
  
  // Fallback image if no images provided
  const displayImages = images && images.length > 0 
    ? images 
    : ['/images/car-placeholder.png'];

  return (
    <div>
      <div className="relative aspect-[16/10] rounded-lg overflow-hidden mb-4">
        <Image
          src={displayImages[activeImage]}
          alt="Car"
          fill
          className="object-contain"
        />
      </div>
      
      {displayImages.length > 1 && (
        <div className="grid grid-cols-4 gap-2">
          {displayImages.map((image, index) => (
            <div 
              key={index}
              className={`relative aspect-[16/10] rounded-lg overflow-hidden cursor-pointer ${
                activeImage === index ? 'ring-2 ring-blue-500' : ''
              }`}
              onClick={() => setActiveImage(index)}
            >
              <Image
                src={image}
                alt={`Car thumbnail ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}