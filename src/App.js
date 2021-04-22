import "./App.css";
import SearchForm from "./SearchForm";
import MainBody from "./MainBody";
import Forecast from "./Forecast";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <SearchForm />
      <MainBody />
      <Forecast />
      <Footer />
    </div>
  );
}

export default App;
