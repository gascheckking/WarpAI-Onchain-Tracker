import { Routes, Route } from 'react-router-dom';
import Home from './pages/index';
import Tracker from './pages/tracker';
import Rewards from './pages/rewards';

export default function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tracker" element={<Tracker />}
