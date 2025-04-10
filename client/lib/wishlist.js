const WISHLIST_KEY = 'carhub_wishlist';

// Get wishlist items from local storage
export const getWishlist = () => {
  if (typeof window === 'undefined') {
    return [];
  }
  
  const wishlist = localStorage.getItem(WISHLIST_KEY);
  return wishlist ? JSON.parse(wishlist) : [];
};

// Add car to wishlist
export const addToWishlist = (car) => {
  if (typeof window === 'undefined') {
    return;
  }
  
  const wishlist = getWishlist();
  
  // Check if car is already in wishlist
  if (!wishlist.some(item => item.id === car.id)) {
    const updatedWishlist = [...wishlist, car];
    localStorage.setItem(WISHLIST_KEY, JSON.stringify(updatedWishlist));
  }
};

// Remove car from wishlist
export const removeFromWishlist = (carId) => {
    if (typeof window === 'undefined') {
      return;
    }
    
    const wishlist = getWishlist();
    const updatedWishlist = wishlist.filter(car => car.id !== carId);
    localStorage.setItem(WISHLIST_KEY, JSON.stringify(updatedWishlist));
  };
  
  // Check if car is in wishlist
  export const isInWishlist = (carId) => {
    if (typeof window === 'undefined') {
      return false;
    }
    
    const wishlist = getWishlist();
    return wishlist.some(car => car.id === carId);
  };
  