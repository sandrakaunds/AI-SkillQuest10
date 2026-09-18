import { Link } from "react-router-dom";
import Button from "./Button";

function QuestCard({
  icon,
  title,
  description,
  difficulty = "Beginner",
  points = 50,
}) {
  return (
    <div className="quest-card">

      <div className="quest-icon">
        {icon}
      </div>

      <div className="quest-content">

        <div className="quest-top">
          <span className="quest-label">
            QUEST
          </span>

          <span className="quest-difficulty">
            {difficulty}
          </span>
        </div>

        <h3>{title}</h3>

        <p>{description}</p>

        <div className="quest-footer">

          <span className="quest-points">
            ⭐ {points} XP
          </span>

          <Link to="/challenges">
            <Button variant="secondary">
              Start Quest
            </Button>
          </Link>

        </div>

      </div>

    </div>
  );
}

export default QuestCard;