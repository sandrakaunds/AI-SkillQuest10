function SkillCard({
  icon,
  title,
  description,
  level,
  progress,
}) {
  return (
    <div className="skill-card">

      <div className="skill-card-icon">
        {icon}
      </div>

      <div className="skill-card-content">

        <h3>{title}</h3>

        <p>{description}</p>

        <div className="skill-card-bottom">

          <span className="skill-level">
            {level}
          </span>

          <span className="skill-progress-text">
            {progress}%
          </span>

        </div>

        <div className="skill-progress-track">
          <div
            className="skill-progress-fill"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

      </div>

    </div>
  );
}

export default SkillCard;