import api from './api';

// Login function
export const login = async ({email, password}) => {
  try {
    const response = await api.post('/auth/login', { email, password });
    const { accessToken } = response.data;
    console.log("Hit 1")
    // Store access token
    localStorage.setItem('accessToken', accessToken);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error?.message || 'Login failed');
  }
};

// Register function
export const register = async (userData) => {
  try {
    const response = await api.post('/auth/register', userData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error?.message || 'Registration failed');
  }
};

// Logout function
export const logout = async () => {
  try {
    await api.post('/auth/logout');

    // Clear access token from localStorage
    localStorage.removeItem('accessToken');
  } catch (error) {
    throw new Error('Logout failed');
  }
};

export const googleAuth = async (code) => {
    try {
        const response = await api.post('/auth/google', { code });
        const { accessToken } = response.data;

        // Store access token
        localStorage.setItem('accessToken', accessToken);
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.error?.message || 'Google authentication failed');
    }
};
