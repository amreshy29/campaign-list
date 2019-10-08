import React from "react";
import ReactDOM from "react-dom";
import SearchHeader from "./components/SearchHeader";
import "./styles.css";
import Campaign from "./components/Campaign";

function App() {
  return (
    <div className="App">
      <SearchHeader />
      <Campaign />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
