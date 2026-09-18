
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";

function Challenges() {
  const [completed, setCompleted] = useState([]);

  const challenges = [
    {
      id: 1,
      icon: "🗄️",
      skill: "SQL",
      title: "Write a Sales Query",
      description:
        "Write a SQL query to find the top five products by sales.",
      difficulty: "Beginner",
      xp: 50,
    },
    {
      id: 2,
      icon: "📊",
      skill: "Power BI",
      title: "Build a KPI Dashboard",
      description:
        "Create a dashboard showing sales, profit and order KPIs.",
      difficulty: "Intermediate",
      xp: 100,
    },
    {
      id: 3,
      icon: "🐍",
      skill: "Python",
      title: "Clean a Dataset",
      description:
        "Identify missing values and prepare a dataset for analysis.",
      difficulty: "Intermediate",
      xp: 100,
    },
    {
      id: 4,
      icon: "🔍",
      skill: "SEO",
      title: "Perform an SEO Audit",
      description:
        "Identify technical and on-page SEO opportunities on a website.",
      difficulty: "Advanced",
      xp: 150,
    },
  ];

  const completeChallenge = (id) => {
    if (!completed.includes(id)) {
      setCompleted([...completed, id]);
    }
  };

  return (
    <div className="page">

      <section className="page-hero">

        <div>
          <span className="section-label">
            DAILY QUESTS
          </span>

          <h1>Learn by doing 🏆</h1>

          <p>
            Complete practical challenges, earn XP,
            and build real-world skills.
          </p>
        </div>

        <div className="xp-card">
          <span>⭐</span>
          <strong>850 XP</strong>
          <small>Total XP</small>
        </div>

      </section>

      <div className="challenge-filters">

        <button className="filter active">
          All
        </button>

        <button className="filter">
          SQL
        </button>

        <button className="filter">
          Power BI
        </button>

        <button className="filter">
          Python
        </button>

        <button className="filter">
          SEO
        </button>

      </div>

      <section className="challenge-grid">

        {challenges.map((challenge) => {

          const isComplete = completed.includes(
            challenge.id
          );

          return (
            <div
              className={`challenge-card ${
                isComplete ? "completed" : ""
              }`}
              key={challenge.id}
            >

              <div className="challenge-icon">
                {challenge.icon}
              </div>

              <span className="challenge-skill">
                {challenge.skill}
              </span>

              <h2>{challenge.title}</h2>

              <p>{challenge.description}</p>

              <div className="challenge-meta">

                <span>
                  🎯 {challenge.difficulty}
                </span>

                <span>
                  ⭐ {challenge.xp} XP
                </span>

              </div>

              <Button
                variant={
                  isComplete
                    ? "secondary"
                    : "primary"
                }
                onClick={() =>
                  completeChallenge(challenge.id)
                }
              >
                {isComplete
                  ? "✓ Completed"
                  : "Start Challenge"}
              </Button>

            </div>
          );
        })}

      </section>

      <section className="page-actions">

        <Link to="/dashboard">
          <Button>
            View My Dashboard →
          </Button>
        </Link>

      </section>

    </div>
  );
}

export default Challenges;

