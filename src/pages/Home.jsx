import { Link } from "react-router-dom";

import Button from "../components/Button";
import SkillCard from "../components/SkillCard";
import ProgressBar from "../components/ProgressBar";
import QuestCard from "../components/QuestCard";

function Home() {
  return (
    <div className="home-page">

      {/* HERO SECTION */}

      <section className="hero-section">

        <div className="hero-content">

          <span className="hero-badge">
            ✨ AI-Powered Career Learning
          </span>

          <h1>
            Your Skills.
            <br />
            <span>Your Future.</span>
          </h1>

          <p>
            Discover the skills you need, identify your skill gaps,
            build a personalized learning roadmap, and complete
            practical challenges to move closer to your career goals.
          </p>

          <div className="hero-buttons">

            <Link to="/career-goal">
              <Button>
                Get Started →
              </Button>
            </Link>

            <Link to="/assessment">
              <Button variant="outline">
                Take Skill Assessment
              </Button>
            </Link>

          </div>

        </div>

        <div className="hero-visual">

          <div className="hero-circle">
            🧠
          </div>

          <div className="floating-card floating-card-one">
            🎯 Career Goal
          </div>

          <div className="floating-card floating-card-two">
            📈 Skill Progress
          </div>

          <div className="floating-card floating-card-three">
            🏆 New Quest
          </div>

        </div>

      </section>


      {/* FEATURES */}

      <section className="section">

        <div className="section-heading">

          <span className="section-label">
            HOW IT WORKS
          </span>

          <h2>
            Build your career journey
          </h2>

          <p>
            AI-SkillQuest10 helps you understand where you are
            and what you should learn next.
          </p>

        </div>

        <div className="feature-grid">

          <div className="feature-card">
            <div className="feature-icon">🎯</div>
            <h3>Set Your Career Goal</h3>
            <p>
              Choose the career path you want to pursue
              and define your learning destination.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🧠</div>
            <h3>Assess Your Skills</h3>
            <p>
              Evaluate your current knowledge and identify
              the skills you already have.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Find Your Skill Gap</h3>
            <p>
              Understand which skills you need to develop
              for your target career.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🗺️</div>
            <h3>Follow Your Roadmap</h3>
            <p>
              Follow a structured learning roadmap designed
              around your career objectives.
            </p>
          </div>

        </div>

      </section>


      {/* SKILLS */}

      <section className="section skills-section">

        <div className="section-heading">

          <span className="section-label">
            YOUR SKILLS
          </span>

          <h2>
            Track your learning progress
          </h2>

          <p>
            Build confidence by developing practical,
            career-ready skills.
          </p>

        </div>

        <div className="skills-grid">

          <SkillCard
            icon="📊"
            title="Data Analytics"
            description="SQL, Excel, Power BI and data visualization."
            level="Intermediate"
            progress={68}
          />

          <SkillCard
            icon="💻"
            title="Web Development"
            description="React, JavaScript, HTML and CSS."
            level="Intermediate"
            progress={74}
          />

          <SkillCard
            icon="🤖"
            title="AI & Automation"
            description="AI tools, automation and intelligent workflows."
            level="Beginner"
            progress={42}
          />

          <SkillCard
            icon="🔍"
            title="Digital Marketing"
            description="SEO, content strategy and digital marketing."
            level="Intermediate"
            progress={61}
          />

        </div>

      </section>


      {/* PROGRESS */}

      <section className="progress-section">

        <div className="progress-card">

          <div>

            <span className="section-label">
              LEARNING JOURNEY
            </span>

            <h2>
              Your overall progress
            </h2>

            <p>
              Keep learning and completing quests to reach
              your career goals.
            </p>

          </div>

          <div className="progress-area">

            <ProgressBar
              label="Overall Career Readiness"
              value={64}
            />

            <ProgressBar
              label="Technical Skills"
              value={72}
            />

            <ProgressBar
              label="Practical Challenges"
              value={48}
            />

          </div>

        </div>

      </section>


      {/* QUESTS */}

      <section className="section">

        <div className="section-heading">

          <span className="section-label">
            DAILY QUESTS
          </span>

          <h2>
            Learn by doing
          </h2>

          <p>
            Complete practical challenges and earn XP
            as you develop your skills.
          </p>

        </div>

        <div className="quest-grid">

          <QuestCard
            icon="🗄️"
            title="Write Your First SQL Query"
            description="Practice SELECT, WHERE and ORDER BY using a business dataset."
            difficulty="Beginner"
            points={50}
          />

          <QuestCard
            icon="📊"
            title="Build a KPI Dashboard"
            description="Create a simple dashboard using sales and performance data."
            difficulty="Intermediate"
            points={100}
          />

          <QuestCard
            icon="🤖"
            title="Create an AI Workflow"
            description="Design an automated workflow that solves a real business problem."
            difficulty="Intermediate"
            points={150}
          />

        </div>

      </section>


      {/* FINAL CTA */}

      <section className="cta-section">

        <div>

          <span className="section-label">
            START YOUR JOURNEY
          </span>

          <h2>
            Ready to build your future?
          </h2>

          <p>
            Set your career goal and discover the skills
            you need to get there.
          </p>

        </div>

        <Link to="/career-goal">
          <Button>
            Create My Career Roadmap →
          </Button>
        </Link>

      </section>

    </div>
  );
}

export default Home;