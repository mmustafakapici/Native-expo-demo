import axios from 'axios';

export const fetchCoins = async () => {
  try {
    const response = await axios.get('https://ailayzer.up.railway.app/list');
    return response.data;
  } catch (error) {
    console.error(error);

  }
};


