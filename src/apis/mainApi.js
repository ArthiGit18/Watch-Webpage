// api/headerApi.js
import axios from 'axios';

// Function to get header content from the API
export const getHeaderContent = async () => {
  try {
    const response = await axios.get('http://localhost:3001/api/headers');
    return response.data;
  } catch (error) {
    console.error('Error fetching header content:', error);
    throw error;
  }
};
export const getAboutContent = async () => {
  try {
    const response = await axios.get('http://localhost:3001/api/about');
    return response.data;
  } catch (error) {
    console.error('Error fetching about content:', error);
    throw error;
  }
};
