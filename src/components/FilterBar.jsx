import "./FilterBar.css";
import SingleFilter from "./SingleFilter";

export default function FilterBar() {
  return (
    <div className="filters-bar">
      <div className="filters-container">
        <SingleFilter textFilter={"Frontend"} />
        <SingleFilter textFilter={"CSS"} />
        {/* <SingleFilter textFilter={"JavaScript"} /> */}
      </div>
      <button className="clear-container-button">Clear</button>
    </div>
  );
}
