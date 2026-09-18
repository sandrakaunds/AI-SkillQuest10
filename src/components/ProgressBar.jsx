
function ProgressBar({ label, value }) {
  return (
    <div className="progress-wrapper">
      <div className="progress-label">
        <span>{label}</span>
        <strong>{value}%</strong>
      </div>

      <div className="progress-track">
        <div
          className="progress-fill"
          style={{ width: `${value}%` }}
        ></div>
      </div>
    </div>
  );
}

export default ProgressBar;