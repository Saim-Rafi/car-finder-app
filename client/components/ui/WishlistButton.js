export default function WishlistButton({ inWishlist, onClick }) {
    return (
      <button
        onClick={onClick}
        className={`flex items-center justify-center px-4 py-2 rounded-md border ${
          inWishlist 
            ? 'border-red-500 text-red-500 hover:bg-red-50' 
            : 'border-gray-300 text-gray-700 hover:bg-gray-50'
        }`}
      >
        <svg 
          className={`w-5 h-5 mr-2 ${inWishlist ? 'text-red-500 fill-current' : 'text-gray-400'}`} 
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
        {inWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}
      </button>
    );
  }