import "./App.css";
import FilterBar from "./components/FilterBar";
import HeaderBg from "./components/HeaderBg";
import JobDisplay from "./components/JobDisplay";

export default function App() {
  // companies = {
  //   company: {
  //     id: "",
  //     companyName: "",
  //     logo: "",
  //     isNew: "",
  //     isFeatured: "",
  //     position: "",
  //     role: "",
  //     level: "",
  //     postedAt: "",
  //     contract: "",
  //     location: "",
  //     languages: "",
  //   },
  // };

  return (
    // Estudar melhor o "Fragment"
    <>
      <HeaderBg />
      <main className="container">
        <FilterBar />
        <JobDisplay />
        <JobDisplay />
        <JobDisplay />
      </main>
    </>
  );
}
