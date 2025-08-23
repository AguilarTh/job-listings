import "./App.css";
import FilterBar from "./components/FilterBar";
import HeaderBg from "./components/HeaderBg";
import JobDisplay from "./components/JobDisplay";
import companiesData from "../data.json";
import { useState } from "react";

export default function App() {
  // O filtrosAtivos tem que ser um ESTADO (estudar melhor hook), pois uma constante normal nn é atualizado mesmo se adicionar
  const [filtrosAtivos, setFiltrosAtivos] = useState([]);
  // entender pq nn coloquei fuction
  const addFiltro = (filtroClick) => {
    // .includes = Metodo de Array do JS para saber se um elemento está dentro de um Array
    if (filtrosAtivos.includes(filtroClick)) {
      // se um filtro ja ta incluido nn precisa fzr nd
      return;
    }

    const newFiltrosAtivos = [...filtrosAtivos, filtroClick];

    const filtrosAtivosOrdenados = newFiltrosAtivos.sort();

    // Atualização do estado -> entender melhor
    setFiltrosAtivos(filtrosAtivosOrdenados);
  };

  const clearAllFiltros = () => {
    setFiltrosAtivos([]);
  };

  // Para isso vamos usar o metodo de array "filter" Estudar melhor
  const clearSingleFiltro = (filtroToRemove) => {
    const newFiltros = filtrosAtivos.filter(
      (filtro) => filtro !== filtroToRemove
    );
    setFiltrosAtivos(newFiltros);
  };

  let isSearchActive = filtrosAtivos.length !== 0;

  const isJobCaracActive = (company) => {
    const allJobFiltros = [
      company.role || [],
      company.level || [],
      ...(company.languages || []),
      ...(company.tools || []),
    ];

    if (filtrosAtivos.length === 0) {
      return true;
    }
    // olhar certo sobre .include X .every
    return filtrosAtivos.every((filtro) => allJobFiltros.includes(filtro));
  };
  return (
    // Estudar melhor o "Fragment"
    // NAO CONSEGUI ENTENDER AINDA COMO PEGAR OS DADOS DO .JSON
    <>
      <HeaderBg />
      <main className="container">
        <FilterBar
          filtrosAtivos={filtrosAtivos}
          onClearButtonClick={clearAllFiltros}
          onSingleClearButtonClick={clearSingleFiltro}
          isSearchActive={isSearchActive}
        />
        {/* entender melhor essa parte do filtro dps */}
        {companiesData.map(
          (company) =>
            isJobCaracActive(company) && (
              <JobDisplay
                key={company.id}
                {...company}
                onFiltroClick={addFiltro}
              />
            )
        )}
      </main>
    </>
  );
}
