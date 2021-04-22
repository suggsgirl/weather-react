import React from "react";
import "./App.css";
import SearchForm from "./SearchForm";
import MainBody from "./MainBody";
import Forecast from "./Forecast";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <SearchForm />
      <MainBody />
      <Forecast />
      <Footer />
    </div>
  );
}
