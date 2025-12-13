import Leaderboard from "../components/Leaderboard";
import RewardTasks from "../components/RewardTasks";

export default function Rewards() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <h1 className="text-2xl font-bold mb-6">🎁 Earn WARP Tokens</h1>
      <RewardTasks />
      <Leaderboard />
    </div>
  );
}