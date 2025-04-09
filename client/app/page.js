import Hero from '@/components/layout/Hero';
import FeaturedCars from '@/components/cars/FeaturedCars';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Featured Cars</h2>
        <FeaturedCars />
        <div className="mt-12 text-center">
          <Link 
            href="/cars" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-md transition"
          >
            Explore All Cars
          </Link>
        </div>
      </div>
    </div>
  );
}