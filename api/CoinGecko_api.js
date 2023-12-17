import axios from 'axios';

export const fetchCoins = async () => {
  try {
    const response = await axios.get('https://api-demo-production.up.railway.app/list');
    return response.data;
  } catch (error) {
    console.error(error);

  }
};


