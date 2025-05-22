// utils/api.js
import axios from 'axios';

// Konfiguration
const OWLRACLE_API_KEY = import.meta.env.VITE_OWLRACLE_KEY || 'YOUR_FALLBACK_KEY';
const ALCHEMY_API_KEY = import.meta.env.VITE_ALCHEMY_KEY || 'YOUR_FALLBACK_KEY';

// Gas Price API (med felhantering och mock-läge)
export const fetchGasPrice = async (useMock = false) => {
  if (useMock) {
    // Mock-läge för utveckling
    return new Promise(resolve => {
      setTimeout(() => resolve(Math.random() * 100), 500);
    });
  }

  try {
    const response = await axios.get(
      `https://api.owlracle.info/v4/eth/gas`,
      { params: { apikey: OWLRACLE_API_KEY } }
    );
    return response.data.speeds[0].maxFeePerGas;
  } catch (error) {
    console.error("Gas API Error:", error);
    // Fallback till mock vid fel
    return fetchGasPrice(true);
  }
};

// Portfolio Data (med Alchemy)
export const fetchPortfolio = async (address, useMock = false) => {
  if (useMock) {
    return {
      address,
      ETH: (Math.random() * 10).toFixed(4),
      tokens: []
    };
  }

  try {
    const response = await axios.get(
      `https://eth-mainnet.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      { params: { address } }
    );
    return response.data;
  } catch (error) {
    console.error("Alchemy API Error:", error);
    return fetchPortfolio(address, true); // Fallback till mock
  }
};

// Ytterligare verktygsfunktioner
export const formatGwei = (value) => parseFloat(value).toFixed(2);
