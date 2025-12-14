import React from 'react';

export default function Leaderboard() {
  const topUsers = [
    { name: 'Alice', score: 120 },
    { name: 'Bob', score: 95 },
    { name: 'Charlie', score: 80 },
  ];

  return (
    <div className="mt-6">
      <h2 className="font-bold mb-2">🏆 Leaderboard</h2>

      <div className="bg-gray-800 rounded-lg overflow-hidden">
        {topUsers.map((user, index) => (
          <div
            key={index}
            className="flex justify-between px-4 py-2 border-b border-gray-700 last:border-b-0"
          >
            <span>{user.name}</span>
            <span className="text-emerald-400">{user.score}</span>
          </div>
        ))}
      </div>
    </div>
  );
}