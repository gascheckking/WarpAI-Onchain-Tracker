import { useEffect, useState } from 'react';
import { fetchGasPrice } from '../utils/api';

export default function GasMeter() {
  const [gwei, setGwei] = useState(0);
  const [color, setColor] = useState('bg-gray-500');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const updateGas = async () => {
      try {
        setIsLoading(true);
        const price = await fetchGasPrice();
        const roundedPrice = price.toFixed(0);
        setGwei(roundedPrice);

        // Set color based on gas price
        if (price < 30) {
          setColor('bg-emerald-500'); // Green
        } else if (price < 70) {
          setColor('bg-amber-500'); // Yellow
        } else {
          setColor('bg-red-500'); // Red
        }
      } catch (error) {
        console.error("Failed to fetch gas data:", error);
        setColor('bg-gray-500'); // Fallback color
      } finally {
        setIsLoading(false);
      }
    };

    updateGas();
    const interval = setInterval(updateGas, 30000); // Update every 30 seconds
    return () => clearInterval(interval);
  }, []);

  // Calculate bar width (0-100%) with max at 150 Gwei for visualization
  const barWidth = Math.min(100, (gwei / 150) * 100);

  return (
    <div className="w-full bg-gray-800 rounded-lg p-4 mb-6">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-bold text-white flex items-center">
          ⚡ Gas Tracker
          {isLoading && (
            <span className="ml-2 text-xs bg-gray-700 px-2 py-1 rounded animate-pulse">
              Loading...
            </span>
          )}
        </h3>
        <span className={`px-3 py-1 rounded-full text-sm font-mono ${color}`}>
          {gwei} Gwei
        </span>
      </div>
      
      {/* Gas Bar Visualization */}
      <div className="h-3 bg-gray-700 rounded-full overflow-hidden mb-2">
        <div 
          className={`h-full ${color} transition-all duration-1000 ease-out`}
          style={{ width: `${barWidth}%` }}
        />
      </div>

      {/* Price Suggestions */}
      {!isLoading && (
        <div className="text-xs">
          {gwei > 70 ? (
            <p className="text-red-300">⚠️ Avoid transactions - High fees</p>
          ) : gwei > 40 ? (
            <p className="text-amber-300">⏳ Wait if possible - Moderate fees</p>
          ) : (
            <p className="text-emerald-300">✨ Good time to transact - Low fees</p>
          )}
        </div>
      )}
    </div>
  );
}
