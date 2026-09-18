import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">

        <Link to="/" className="navbar-brand" onClick={closeMenu}>
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

        {/* Mobile hamburger button */}
        <button
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation */}
        <div className={`navbar-links ${menuOpen ? "mobile-open" : ""}`}>

          <Link to="/" onClick={closeMenu}>
            Home
          </Link>

          <Link to="/profile" onClick={closeMenu}>
            Profile
          </Link>

          <Link to="/career-goal" onClick={closeMenu}>
            Career Goal
          </Link>

          <Link to="/assessment" onClick={closeMenu}>
            Assessment
          </Link>

          <Link to="/skill-gap" onClick={closeMenu}>
            Skill Gap
          </Link>

          <Link to="/roadmap" onClick={closeMenu}>
            Roadmap
          </Link>

          <Link to="/challenges" onClick={closeMenu}>
            Challenges
          </Link>

          <Link to="/dashboard" onClick={closeMenu}>
            Dashboard
          </Link>

          <Link
            to="/login"
            className="login-nav-button"
            onClick={closeMenu}
          >
            Login
          </Link>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;