import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import CareerGoal from "./pages/CareerGoal";
import Assessment from "./pages/Assessment";
import SkillGap from "./pages/SkillGap";
import Roadmap from "./pages/Roadmap";
import Challenges from "./pages/Challenges";
import Dashboard from "./pages/Dashboard";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app">

        <Navbar />

        <main className="app-content">
          <Routes>

            <Route path="/" element={<Home />} />

            <Route path="/login" element={<Login />} />

            <Route path="/profile" element={<Profile />} />

            <Route path="/career-goal" element={<CareerGoal />} />

            <Route path="/assessment" element={<Assessment />} />

            <Route path="/skill-gap" element={<SkillGap />} />

            <Route path="/roadmap" element={<Roadmap />} />

            <Route path="/challenges" element={<Challenges />} />

            <Route path="/dashboard" element={<Dashboard />} />

          </Routes>
        </main>

      </div>
    </BrowserRouter>
  );
}

export default App;