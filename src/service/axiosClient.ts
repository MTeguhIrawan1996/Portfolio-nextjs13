import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_DEVTO_BASE_URL,
  headers: {
    'api-key': process.env.NEXT_PUBLIC_DEVTO_KEY,
  },
});
