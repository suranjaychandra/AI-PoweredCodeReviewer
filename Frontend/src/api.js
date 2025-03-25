import axios from 'axios';

const API = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,  // Read from the .env file
});

// Define a function to fetch data from the backend
export const getSomeData = () => {
  return API.get('/ai/some-endpoint');  // Update with actual API endpoint
};
