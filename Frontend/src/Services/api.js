import axios from 'axios';

// Create an axios instance
const api = axios.create({
  baseURL: 'http://localhost:8080/api/', 
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, 
});

// Function to refresh the access token
const refreshAccessToken = async () => {
  try {
    const response = await axios.post('http://localhost:8080/api/auth/refresh', {}, {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true, // Include cookies if necessary
    });
    const { accessToken } = response.data;

    // Store new access token in localStorage
    localStorage.setItem('accessToken', accessToken);
    return accessToken;
  } catch (error) {
    console.error('Failed to refresh token:', error);
    throw error;
  }
};

// Request interceptor to add the access token to headers
api.interceptors.request.use(
  async (config) => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor to handle errors and refresh token if needed
api.interceptors.response.use(
  (response) => response, 
  async (error) => {
    const originalRequest = error.config;
    
    if (error.response && (error.response.status === 401 || error.response.status === 403)) {
      try {
        const newAccessToken = await refreshAccessToken();
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return api(originalRequest); // Retry the original request with the new token
      } catch (refreshError) {
        console.error('Token refresh failed:', refreshError);
        throw new Error("Please login again to continue");
      }
    }

    throw new Error("Please login again to continue");
  }
);

export default api;
