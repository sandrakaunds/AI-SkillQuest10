

import { Link } from "react-router-dom";
import Button from "../components/Button";

function SkillGap() {
  const skills = [
    {
      name: "SQL",
      current: 75,
      required: 85,
    },
    {
      name: "Excel",
      current: 82,
      required: 80,
    },
    {
      name: "Power BI",
      current: 60,
      required: 85,
    },
    {
      name: "Python",
      current: 45,
      required: 75,
    },
    {
      name: "Statistics",
      current: 55,
      required: 80,
    },
  ];

  return (
    <div className="page">

      <section className="page-hero centered">

        <span className="section-label">
          STEP 3 • SKILL GAP
        </span>

        <h1>Understand what you need to learn 📊</h1>

        <p>
          Compare your current skill level with the skills
          commonly required for your target career.
        </p>

      </section>

      <section className="skill-gap-card">

        <div className="gap-summary">

          <div className="gap-score">
            <strong>68%</strong>
            <span>Career Readiness</span>
          </div>

          <div>
            <h2>Your Skill Gap</h2>
            <p>
              You have a strong foundation. Focus on the
              highlighted skills to continue progressing.
            </p>
          </div>

        </div>

        <div className="skill-gap-list">

          {skills.map((skill) => {

            const gap = skill.required - skill.current;

            return (
              <div className="gap-row" key={skill.name}>

                <div className="gap-name">
                  <strong>{skill.name}</strong>

                  <span>
                    {gap > 0
                      ? `${gap}% gap`
                      : "Goal achieved"}
                  </span>
                </div>

                <div className="gap-bars">

                  <div className="gap-bar">
                    <div
                      className="current-bar"
                      style={{
                        width: `${skill.current}%`,
                      }}
                    ></div>
                  </div>

                  <div className="required-label">
                    Required: {skill.required}%
                  </div>

                </div>

              </div>
            );
          })}

        </div>

        <div className="page-actions">

          <Link to="/roadmap">
            <Button>
              Build My Learning Roadmap →
            </Button>
          </Link>

        </div>

      </section>

    </div>
  );
}

export default SkillGap;

