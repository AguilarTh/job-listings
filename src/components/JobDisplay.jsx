import "./JobDisplay.css";
import JobFilters from "./JobFilters";
import SpecialMarker from "./SpecialMarker";

export default function JobDisplay({company, isNew, logo, featured, position, role, level, postedAt, contract, location, languages, tools}) {
  let featuredBorder;
  featured
    ? (featuredBorder = "0.5rem solid var(--green400)")
    : (featuredBorder = "0.5rem solid rgb(255, 255, 255)");
  
  return (
    <div className="job-display" style={{ borderLeft: featuredBorder }}>
      <div className="logo-circle">
        <img src={logo} alt="logo da company" />
      </div>
      <div className="job-top-bar">
        <h2 className="job-name">{company}</h2>
        {/* VER SE TEM UMA LOGICA MELHOR PARA ISSO */}
        <SpecialMarker type={"newMarker"} isTrue={isNew}/>
        <SpecialMarker type={"featuredMarker"} isTrue={featured}/>
      </div>
      <div>
        <h2 className="job-function">{position}</h2>
      </div>
      <ul className="job-infos">
        <li className="posted-time">{postedAt}</li>
        <li className="contract-type">{contract}</li>
        <li className="location">{location}</li>
      </ul>
      <hr />
      <div className="filters-job-display">
        <JobFilters textFilter={role} />
        <JobFilters textFilter={level} />
        {languages.map(language => (
          <JobFilters textFilter={language} />
        ))}
        {tools.map(tool => (
          <JobFilters textFilter={tool} />
        ))}
      </div>
    </div>
  );
}
