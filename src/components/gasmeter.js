// src/components/GasMeter.js
import { useState, useEffect } from 'react';

export default function GasMeter() {
  const [gwei, setGwei] = useState(0);
  const [color, setColor] = useState('bg-gray-500');

  // Fetch gas price every 30 seconds
  useEffect(() => {
    const fetchGasPrice = async () => {
      try {
        const response = await fetch('https://api.owlracle.info/v4/eth/gas?apikey=YOUR_OWLRACLE_KEY');
        const data = await response.json();
        const currentGwei = data.speeds[0].maxFeePerGas.toFixed(0);
        setGwei(currentGwei);

        // Set color based on gas price
        if (currentGwei < 30) {
          setColor('bg-emerald-500'); // Green
        } else if (currentGwei < 70) {
          setColor('bg-amber-500'); // Yellow
        } else {
          setColor('bg-red-500'); // Red
        }
      } catch (error) {
        console.error("Failed to fetch gas data:", error);
      }
    };

    fetchGasPrice();
    const interval = setInterval(fetchGasPrice, 30000);
    return () => clearInterval(interval);
  }, []);

  // Calculate bar width (0-100%)
  const barWidth = Math.min(100, (gwei / 150) * 100);

  return (
    <div className="w-full bg-gray-800 rounded-lg p-4">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-bold text-white">⚡ GAS PRICE</h3>
        <span className={`px-2 py-1 rounded-full text-xs font-mono ${color}`}>
          {gwei} Gwei
        </span>
      </div>
      
      {/* Animated Gas Bar */}
      <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
        <div 
          className={`h-full ${color} transition-all duration-1000 ease-out`}
          style={{ width: `${barWidth}%` }}
        />
      </div>

      {/* Price Alert Suggestion */}
      {gwei > 50 && (
        <p className="mt-2 text-xs text-amber-300">
          ⏳ Wait for lower fees! (Best time: 2-5 AM UTC)
        </p>
      )}
    </div>
  );
}
