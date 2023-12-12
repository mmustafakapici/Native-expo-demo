import axios from 'axios';

export const fetchCoins = async () => {
  try {
    const response = await axios.get('https://localhost:8080/coins');
    return response.data;
  } catch (error) {
    console.error(error);

  }
};


