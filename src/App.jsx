import "./App.css";
import FilterBar from "./components/FilterBar";
import HeaderBg from "./components/HeaderBg";
import JobDisplay from "./components/JobDisplay";
import companiesData from '../data.json'

export default function App() {
  return (
    // Estudar melhor o "Fragment"
    // NAO CONSEGUI ENTENDER AINDA COMO PEGAR OS DADOS DO .JSON
    // ESTUDAR ISSO BEM MELHOR
    <>
      <HeaderBg />
      <main className="container">
        <FilterBar />
        {companiesData.map(company => (
          <JobDisplay key={company.id}{...company} />
        ))}
      </main>
    </>
  );
}
