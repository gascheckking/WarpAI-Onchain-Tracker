import axios from 'axios';

export const fetchGasPrice = async () => {
  const response = await axios.get('https://api.owlracle.info/v4/eth/gas?apikey=YOUR_KEY');
  return response.data.speeds[0].maxFeePerGas;
};

export const fetchPortfolio = async (address) => {
  // Använd Alchemy API
  const response = await axios.get(`https://eth-mainnet.g.alchemy.com/v2/YOUR_KEY`, {
    params: { address }
  });
  return response.data;
};
