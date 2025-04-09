import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image 
            src="/images/logo.svg" 
            alt="CarHub"
            width={32}
            height={32}
          />
          <span className="ml-2 text-xl font-bold">CarHub</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/cars" className="text-gray-700 hover:text-blue-600">
            Cars
          </Link>
          <Link href="/wishlist" className="text-gray-700 hover:text-blue-600">
            Wishlist
          </Link>
        </nav>
        
        <div className="flex items-center">
          <Link 
            href="/sign-in" 
            className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-full text-sm font-medium transition"
          >
            Sign in
          </Link>
        </div>
      </div>
    </header>
  );
}
