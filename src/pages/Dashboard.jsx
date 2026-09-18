

import { Link } from "react-router-dom";
import Button from "../components/Button";
import ProgressBar from "../components/ProgressBar";

function Dashboard() {
  return (
    <div className="page">

      <section className="dashboard-header">

        <div>
          <span className="section-label">
            MY DASHBOARD
          </span>

          <h1>Your Career Dashboard 📈</h1>

          <p>
            See your learning progress, skills, achievements,
            and next steps in one place.
          </p>
        </div>

        <Link to="/challenges">
          <Button>
            Continue Learning →
          </Button>
        </Link>

      </section>

      <section className="dashboard-stats">

        <div className="dashboard-stat">
          <span>🎯</span>
          <strong>68%</strong>
          <small>Career Readiness</small>
        </div>

        <div className="dashboard-stat">
          <span>⭐</span>
          <strong>850</strong>
          <small>Total XP</small>
        </div>

        <div className="dashboard-stat">
          <span>🏆</span>
          <strong>12</strong>
          <small>Quests Completed</small>
        </div>

        <div className="dashboard-stat">
          <span>🔥</span>
          <strong>7</strong>
          <small>Day Streak</small>
        </div>

      </section>

      <section className="dashboard-grid">

        <div className="content-card">

          <div className="card-heading">
            <div>
              <span className="section-label">
                PROGRESS
              </span>

              <h2>Learning Progress</h2>
            </div>
          </div>

          <ProgressBar
            label="Overall Career Readiness"
            value={68}
          />

          <ProgressBar
            label="Technical Skills"
            value={72}
          />

          <ProgressBar
            label="Learning Roadmap"
            value={52}
          />

          <ProgressBar
            label="Challenges"
            value={60}
          />

        </div>

        <div className="content-card">

          <span className="section-label">
            NEXT STEP
          </span>

          <h2>Power BI Dashboard</h2>

          <p>
            Continue your Power BI learning and complete
            the next dashboard challenge.
          </p>

          <div className="next-step-icon">
            📊
          </div>

          <Link to="/challenges">
            <Button>
              Start Challenge →
            </Button>
          </Link>

        </div>

      </section>

      <section className="dashboard-grid">

        <div className="content-card">

          <span className="section-label">
            SKILLS
          </span>

          <h2>Top Skills</h2>

          <div className="skill-list">

            <div>
              <span>Excel</span>
              <strong>82%</strong>
            </div>

            <div>
              <span>SQL</span>
              <strong>75%</strong>
            </div>

            <div>
              <span>Power BI</span>
              <strong>60%</strong>
            </div>

            <div>
              <span>Python</span>
              <strong>45%</strong>
            </div>

          </div>

        </div>

        <div className="content-card">

          <span className="section-label">
            ACHIEVEMENTS
          </span>

          <h2>Your Achievements</h2>

          <div className="achievement-grid">

            <div>🏆<span>First Quest</span></div>
            <div>🔥<span>7 Day Streak</span></div>
            <div>⭐<span>500 XP</span></div>
            <div>📊<span>Data Explorer</span></div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Dashboard;


