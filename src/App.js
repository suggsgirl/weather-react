import "./App.css";
import SearchForm from "./SearchForm";
import MainBody from "./MainBody";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <SearchForm />
      <MainBody defaultCity="Paris"/>
      <Footer />
    </div>
  );
}


