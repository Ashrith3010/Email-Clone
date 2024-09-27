import axios from 'axios';

const API_URL = 'http://localhost:8080/auth'; // Change based on your backend

const login = async (email, password) => {
  const response = await axios.post(`${API_URL}/login`, { email, password });
  localStorage.setItem('token', response.data.token);
};

const register = async (email, password) => {
  await axios.post(`${API_URL}/register`, { email, password });
};

const authService = {
  login,
  register,
};

export default authService;
