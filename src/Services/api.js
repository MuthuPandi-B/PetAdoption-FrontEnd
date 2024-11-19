
import axios from 'axios';

const api =axios.create ({
    baseURL: 'http://localhost:5000/api',

});
api.interceptors.request.use(
     (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
         Promise.reject(error);   
    }   
);
export const getFilteredPets = async (filters) => {
    const params = new URLSearchParams(filters).toString();
    const response = await api.get(`/pets/get?${params}`);
    return response.data;
  };

export default api;