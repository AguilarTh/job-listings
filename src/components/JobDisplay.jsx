import "./JobDisplay.css";
import JobFilters from "./JobFilters";
import SpecialMarker from "./SpecialMarker";

export default function JobDisplay() {
  // var temporaria
  let isFeatured = false;
  let featuredBorder;

  isFeatured
    ? (featuredBorder = "0.5rem solid var(--green400)")
    : (featuredBorder = "0.5rem solid rgb(255, 255, 255)");

  return (
    <div className="job-display" style={{ borderLeft: featuredBorder }}>
      <div className="logo-circle"></div>
      <div className="job-top-bar">
        <h2 className="job-name">Photosnap</h2>
        {/* AQUI VAI PASSAR SE O BALAO FEATURES OU NEW VAI ESTAR ATIVO */}
        <SpecialMarker type={""} />
      </div>
      <div>
        <h2 className="job-function">Senior Frontend Developer</h2>
      </div>
      <ul className="job-infos">
        <li className="posted-time">2d ago</li>
        <li className="contract-type">Full Time</li>
        <li className="location">USA only</li>
      </ul>
      <hr />
      <div className="filters-job-display">
        <JobFilters textFilter={"Frontend"} />
        <JobFilters textFilter={"Senior"} />
        <JobFilters textFilter={"HTML"} />
        <JobFilters textFilter={"CSS"} />
        <JobFilters textFilter={"JavaScript"} />
      </div>
    </div>
  );
}
