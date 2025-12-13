// src/utils/api.js
import axios from "axios";

const OWLRACLE_API_KEY =
  import.meta.env.VITE_OWLRACLE_KEY || "YOUR_FALLBACK_KEY";
const ALCHEMY_API_KEY =
  import.meta.env.VITE_ALCHEMY_KEY || "YOUR_FALLBACK_KEY";

export const fetchGasPrice = async (useMock = false) => {
  if (useMock) {
    return new Promise((resolve) => {
      setTimeout(() => resolve(Math.random() * 100), 500);
    });
  }

  try {
    const response = await axios.get(
      "https://api.owlracle.info/v4/eth/gas",
      {
        params: { apikey: OWLRACLE_API_KEY },
      }
    );
    return response.data.speeds[0].maxFeePerGas;
  } catch (error) {
    console.error("Gas API Error:", error);
    return fetchGasPrice(true);
  }
};

export const fetchPortfolio = async (address, useMock = false) => {
  if (useMock) {
    return {
      address,
      ETH: (Math.random() * 10).toFixed(4),
      tokens: [],
    };
  }

  try {
    const response = await axios.get(
      `https://eth-mainnet.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      {
        params: { address },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Alchemy API Error:", error);
    return fetchPortfolio(address, true);
  }
};

export const formatGwei = (value) => {
  return parseFloat(value).toFixed(2);
};