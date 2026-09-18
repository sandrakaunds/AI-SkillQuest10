
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";

function CareerGoal() {
  const [career, setCareer] = useState("");

  const careers = [
    "Data Analyst",
    "Business Analyst",
    "Full Stack Developer",
    "Digital Marketing Specialist",
    "AI Automation Specialist",
    "Blockchain Developer",
  ];

  return (
    <div className="page">

      <section className="page-hero centered">

        <span className="section-label">
          STEP 1 • CAREER GOAL
        </span>

        <h1>
          What career do you want to build?
        </h1>

        <p>
          Choose your target career and AI-SkillQuest10
          will help you understand the skills you need.
        </p>

      </section>

      <section className="goal-card">

        <div className="goal-icon">
          🎯
        </div>

        <h2>Choose your career goal</h2>

        <p>
          Select the career path that interests you most.
        </p>

        <div className="career-options">

          {careers.map((item) => (
            <button
              key={item}
              className={`career-option ${
                career === item ? "selected" : ""
              }`}
              onClick={() => setCareer(item)}
            >
              <span>💼</span>
              {item}
            </button>
          ))}

        </div>

        {career && (
          <div className="selected-career">
            <strong>Selected career:</strong> {career}
          </div>
        )}

        <div className="page-actions">

          <Link to="/assessment">
            <Button>
              Continue to Assessment →
            </Button>
          </Link>

        </div>

      </section>

    </div>
  );
}

export default CareerGoal;

