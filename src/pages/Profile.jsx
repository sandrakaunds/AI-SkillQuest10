
import { Link } from "react-router-dom";
import Button from "../components/Button";
import ProgressBar from "../components/ProgressBar";

function Profile() {
  return (
    <div className="page">

      <section className="page-hero">
        <div>
          <span className="section-label">MY PROFILE</span>
          <h1>Welcome to your profile 👋</h1>
          <p>
            Manage your learning profile, track your progress,
            and continue building your career journey.
          </p>
        </div>

        <div className="profile-avatar">
          👤
        </div>
      </section>

      <section className="profile-layout">

        <div className="content-card profile-info">

          <h2>Profile Information</h2>

          <div className="profile-details">

            <div className="detail-item">
              <span>Name</span>
              <strong>SkillQuest Learner</strong>
            </div>

            <div className="detail-item">
              <span>Email</span>
              <strong>learner@example.com</strong>
            </div>

            <div className="detail-item">
              <span>Learning Level</span>
              <strong>Intermediate</strong>
            </div>

            <div className="detail-item">
              <span>Target Career</span>
              <strong>Data Analyst</strong>
            </div>

          </div>

          <Link to="/career-goal">
            <Button>Update Career Goal →</Button>
          </Link>

        </div>

        <div className="content-card">

          <h2>Learning Progress</h2>

          <ProgressBar
            label="Overall Progress"
            value={64}
          />

          <ProgressBar
            label="Technical Skills"
            value={72}
          />

          <ProgressBar
            label="Challenges"
            value={48}
          />

        </div>

      </section>

      <section className="stats-grid">

        <div className="stat-card">
          <span>🏆</span>
          <strong>12</strong>
          <p>Quests Completed</p>
        </div>

        <div className="stat-card">
          <span>⭐</span>
          <strong>850</strong>
          <p>Total XP</p>
        </div>

        <div className="stat-card">
          <span>🔥</span>
          <strong>7</strong>
          <p>Day Streak</p>
        </div>

        <div className="stat-card">
          <span>📚</span>
          <strong>8</strong>
          <p>Skills Learning</p>
        </div>

      </section>

    </div>
  );
}

export default Profile;

