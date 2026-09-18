import { Link } from "react-router-dom";
import Button from "../components/Button";

function Login() {
  return (
    <div className="auth-page">

      <div className="auth-card">

        <div className="auth-icon">
          🧠
        </div>

        <span className="section-label">
          WELCOME BACK
        </span>

        <h1>
          Login to AI-SkillQuest10
        </h1>

        <p className="auth-description">
          Continue your learning journey, track your skills,
          complete quests, and move toward your career goals.
        </p>

        <form className="auth-form">

          <div className="form-group">
            <label>Email Address</label>

            <input
              type="email"
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label>Password</label>

            <input
              type="password"
              placeholder="Enter your password"
            />
          </div>

          <div className="form-options">

            <label className="remember-me">
              <input type="checkbox" />
              Remember me
            </label>

            <a href="#forgot">
              Forgot password?
            </a>

          </div>

          <Button type="submit">
            Login →
          </Button>

        </form>

        <div className="auth-divider">
          <span>or</span>
        </div>

        <Link to="/profile" className="guest-link">
          Continue to Profile
        </Link>

        <p className="auth-footer">
          New to AI-SkillQuest10?
          <Link to="/career-goal">
            Start your career journey
          </Link>
        </p>

      </div>

    </div>
  );
}

export default Login;