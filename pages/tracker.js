import OnchainActivity from '../components/OnchainActivity';

export default function Tracker() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <h1 className="text-2xl font-bold mb-6">🔍 Onchain Tracker</h1>
      <OnchainActivity />
    </div>
  );
}
