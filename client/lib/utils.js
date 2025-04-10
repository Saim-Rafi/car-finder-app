// Additional utility functions for the application

// Format price to display currency
export const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };
  
  // Format date to display readable format
  export const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };
  
  // Classify fuel economy (MPG) into categories
  export const classifyMPG = (mpg) => {
    if (mpg >= 40) return 'Excellent';
    if (mpg >= 30) return 'Good';
    if (mpg >= 20) return 'Average';
    return 'Below Average';
  };