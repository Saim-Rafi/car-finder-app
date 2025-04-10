const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

// Helper function to build query string from filters
const buildQueryString = (params) => {
  const query = new URLSearchParams();
  
  Object.entries(params).forEach(([key, value]) => {
    if (value !== '' && value !== undefined && value !== null) {
      query.append(key, value);
    }
  });
  
  return query.toString();
};

// Get cars with filters and pagination
export const getCars = async (params = {}) => {
    try {
      const queryString = buildQueryString(params);
      const response = await fetch(`${API_BASE_URL}/cars?${queryString}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch cars');
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('API error:', error);
      throw error;
    }
  };

  // Get a single car by ID
export const getCarById = async (id) => {
    try {
      const response = await fetch(`${API_BASE_URL}/cars/${id}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch car details');
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('API error:', error);
      throw error;
    }
  };

// Additional API functions can be added here
  