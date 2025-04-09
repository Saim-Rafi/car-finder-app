import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className="bg-gradient-to-r from-white to-blue-500 overflow-hidden">
      <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-12 md:mb-0">
          <h1 className="text-5xl font-bold leading-tight mb-6">
            Find, book, rent a car—
            <br />
            quick and super easy!
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Streamline your car rental experience with our effortless booking process.
          </p>
          <Link 
            href="/cars" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-md transition"
          >
            Explore Cars
          </Link>
        </div>
        <div className="md:w-1/2 relative">
          <Image 
            src="/images/hero-car.png" 
            alt="Toyota Fortuner"
            width={600}
            height={400}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}
