import "./JobFilters.css";

export default function JobFilters({ textFilter, onFiltroClick }) {
  // Basicamente a função para "addFiltro" foi passado de pai->filho ae chegar nesse container mais especifico
  // Agora ao ser clicado, a função "handleClick" vai adicionar o nome do filtro no hook "filtrosAtivos"

  function handleClick() {
    onFiltroClick(textFilter);
  }
  return (
    <span onClick={handleClick} className="filters-box">
      {textFilter}
    </span>
  );
}
