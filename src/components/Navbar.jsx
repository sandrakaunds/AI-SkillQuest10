import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="navbar-container">

        <Link to="/" className="navbar-brand">

          <div className="brand-icon">
            🧠
          </div>

          <div>
            <div className="brand-name">
              AI-SkillQuest10
            </div>

            <div className="brand-tagline">
              Discover • Learn • Build
            </div>
          </div>

        </Link>

        <div className="navbar-links">

          <Link to="/">Home</Link>

          <Link to="/profile">Profile</Link>

          <Link to="/career-goal">
            Career Goal
          </Link>

          <Link to="/assessment">
            Assessment
          </Link>

          <Link to="/skill-gap">
            Skill Gap
          </Link>

          <Link to="/roadmap">
            Roadmap
          </Link>

          <Link to="/challenges">
            Challenges
          </Link>

          <Link to="/dashboard">
            Dashboard
          </Link>

          <Link
            to="/login"
            className="login-nav-button"
          >
            Login
          </Link>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;