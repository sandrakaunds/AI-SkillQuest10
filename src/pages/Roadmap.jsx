

import { Link } from "react-router-dom";
import Button from "../components/Button";
import ProgressBar from "../components/ProgressBar";

function Roadmap() {
  const steps = [
    {
      number: "01",
      icon: "📊",
      title: "Excel & Data Fundamentals",
      description:
        "Learn spreadsheets, formulas, data cleaning and basic analysis.",
      progress: 100,
      status: "Completed",
    },
    {
      number: "02",
      icon: "🗄️",
      title: "SQL for Data Analysis",
      description:
        "Learn queries, filtering, joins, aggregations and business reporting.",
      progress: 75,
      status: "In Progress",
    },
    {
      number: "03",
      icon: "📈",
      title: "Power BI & Visualization",
      description:
        "Build dashboards, KPIs and interactive business reports.",
      progress: 45,
      status: "In Progress",
    },
    {
      number: "04",
      icon: "🐍",
      title: "Python for Analytics",
      description:
        "Use Python for data cleaning, analysis and visualization.",
      progress: 20,
      status: "Upcoming",
    },
    {
      number: "05",
      icon: "🎯",
      title: "Portfolio Project",
      description:
        "Build a complete real-world data analytics project.",
      progress: 0,
      status: "Upcoming",
    },
  ];

  return (
    <div className="page">

      <section className="page-hero">

        <div>
          <span className="section-label">
            STEP 4 • LEARNING ROADMAP
          </span>

          <h1>Your personalized roadmap 🗺️</h1>

          <p>
            Follow a structured learning path based on your
            career goal and current skill level.
          </p>
        </div>

        <div className="roadmap-progress">
          <strong>52%</strong>
          <span>Overall Progress</span>
        </div>

      </section>

      <section className="roadmap-list">

        {steps.map((step) => (

          <div
            className={`roadmap-step ${step.status
              .toLowerCase()
              .replace(" ", "-")}`}
            key={step.number}
          >

            <div className="roadmap-number">
              {step.number}
            </div>

            <div className="roadmap-icon">
              {step.icon}
            </div>

            <div className="roadmap-content">

              <div className="roadmap-title-row">

                <div>
                  <h2>{step.title}</h2>
                  <span className="roadmap-status">
                    {step.status}
                  </span>
                </div>

              </div>

              <p>{step.description}</p>

              <ProgressBar
                label="Progress"
                value={step.progress}
              />

            </div>

          </div>

        ))}

      </section>

      <section className="page-actions">

        <Link to="/challenges">
          <Button>
            Practice with Challenges →
          </Button>
        </Link>

      </section>

    </div>
  );
}

export default Roadmap;



