import axios from 'axios';

const fetchCoins = async () => {
  try {
    // Golang servisinize istek gönderin
    const response = await axios.get('http://localhost:8080/coins');
    return response.data;
  } catch (error) {
    console.error('API Error:', error);
    return [];
  }
};
