export default function Leaderboard() {
  const topUsers = [
    { rank: 1, address: '0xAlice...', warp: 2400 },
    { rank: 2, address: '0xYou...', warp: 1850 },
    { rank: 3, address: '0xBob...', warp: 1200 },
  ];

  return (
    <div className="mt-6">
      <h2 className="font-bold mb-2">🏆 Leaderboard</h2>
      <div className="bg-gray-800 rounded-lg overflow-hidden">
        {topUsers.map((user) => (
          <div key={user.rank} className="flex justify-between p-3 border-b border-gray-700">
            <span>#{user.rank} {user.address}</span>
            <span className="font-mono">{user.warp} WARP</span>
          </div>
        ))}
      </div>
    </div>
  );
}
