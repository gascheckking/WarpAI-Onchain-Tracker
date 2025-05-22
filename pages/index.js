import GasMeter from '../components/GasMeter';
import ActivityFeed from '../components/ActivityFeed';
import QuickActions from '../components/QuickActions';
import WalletConnect from '../components/WalletConnect';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      {/* Header */}
      <header className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <img 
            src="/assets/warpai-logo.png" 
            alt="WarpAI" 
            className="h-8 mr-2"
          />
          <h1 className="font-bold text-xl">WarpAI</h1>
        </div>
        <WalletConnect />
      </header>

      {/* Gas Tracker */}
      <GasMeter />
      
      {/* Stats Section */}
      <div className="my-6 p-4 bg-gray-800 rounded-lg">
        <h2 className="font-bold mb-2">💰 Your Stats</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-700 p-3 rounded-lg">
            <p className="text-emerald-400">+2.4 ETH</p>
            <p className="text-xs text-gray-400">Earned</p>
          </div>
          <div className="bg-gray-700 p-3 rounded-lg">
            <p className="text-red-400">-1.1 ETH</p>
            <p className="text-xs text-gray-400">Spent</p>
          </div>
        </div>
      </div>

      {/* Activity Feed */}
      <ActivityFeed />

      {/* Quick Actions */}
      <QuickActions />
    </div>
  );
}
