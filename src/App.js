import "./App.css";
import MainBody from "./MainBody";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <MainBody defaultCity="London"/>
      <Footer />
    </div>
  );
}


