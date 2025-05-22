export default function ActivityFeed() {
  const activities = [
    { id: 1, action: 'Minted #420', platform: 'Zora', fee: '0.012 ETH' },
    { id: 2, action: 'Swapped 1 ETH', platform: 'Uniswap', fee: '0.005 ETH' },
  ];

  return (
    <div className="mb-6">
      <h2 className="font-bold mb-2">🔄 Recent Activity</h2>
      <div className="space-y-2">
        {activities.map((activity) => (
          <div key={activity.id} className="bg-gray-800 p-3 rounded-lg">
            <p>✔ {activity.action} ({activity.platform})</p>
            <p className="text-xs text-gray-400">{activity.fee}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
