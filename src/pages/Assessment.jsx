
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";

function Assessment() {
  const [answers, setAnswers] = useState({});

  const questions = [
    {
      id: 1,
      skill: "SQL",
      question: "How comfortable are you writing SQL queries?",
    },
    {
      id: 2,
      skill: "Excel",
      question: "How comfortable are you working with Excel?",
    },
    {
      id: 3,
      skill: "Power BI",
      question: "How comfortable are you creating Power BI dashboards?",
    },
    {
      id: 4,
      skill: "Python",
      question: "How comfortable are you using Python for data analysis?",
    },
  ];

  const levels = [
    "Beginner",
    "Basic",
    "Intermediate",
    "Advanced",
  ];

  return (
    <div className="page">

      <section className="page-hero centered">

        <span className="section-label">
          STEP 2 • SKILL ASSESSMENT
        </span>

        <h1>Let's understand your skills 🧠</h1>

        <p>
          Answer a few questions about your current technical
          skills. Your answers will help identify your skill gaps.
        </p>

      </section>

      <section className="assessment-card">

        <div className="assessment-header">

          <div>
            <span className="section-label">
              CURRENT SKILLS
            </span>

            <h2>Rate your confidence</h2>
          </div>

          <div className="assessment-count">
            {Object.keys(answers).length}/{questions.length}
          </div>

        </div>

        {questions.map((question) => (

          <div className="assessment-question" key={question.id}>

            <div className="question-number">
              {question.id}
            </div>

            <div className="question-content">

              <span className="question-skill">
                {question.skill}
              </span>

              <h3>{question.question}</h3>

              <div className="level-options">

                {levels.map((level) => (

                  <button
                    key={level}
                    className={
                      answers[question.id] === level
                        ? "level-option active"
                        : "level-option"
                    }
                    onClick={() =>
                      setAnswers({
                        ...answers,
                        [question.id]: level,
                      })
                    }
                  >
                    {level}
                  </button>

                ))}

              </div>

            </div>

          </div>

        ))}

        <div className="page-actions">

          <Link to="/skill-gap">
            <Button>
              Analyze My Skill Gap →
            </Button>
          </Link>

        </div>

      </section>

    </div>
  );
}

export default Assessment;

