import "./FilterBar.css";
import SingleFilter from "./SingleFilter";

export default function FilterBar({
  filtrosAtivos,
  onClearButtonClick,
  onSingleClearButtonClick,
  isSearchActive,
}) {
  let isVisible = isSearchActive ? "visible" : "hidden";

  return (
    <div className="filters-bar" style={{ visibility: isVisible }}>
      <div className="filters-container">
        {filtrosAtivos.map((filtroAtivo) => (
          <SingleFilter
            key={filtroAtivo}
            textFilter={filtroAtivo}
            onSingleClearButtonClick={onSingleClearButtonClick}
          />
        ))}
      </div>
      <button className="clear-container-button" onClick={onClearButtonClick}>
        Clear
      </button>
    </div>
  );
}
