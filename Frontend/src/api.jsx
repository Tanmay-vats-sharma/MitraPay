import axios from 'axios'

const api = axios.create({
     baseURL:  'http://localhost:8080/auth'
})

export const googleAuth = async (code) => {
    try {
      const response = await api.post('/google', { code });
      return response.data;
    } catch (error) {
      console.error('Google Auth Error:', error);
      throw error;  
    }
  };
  
  