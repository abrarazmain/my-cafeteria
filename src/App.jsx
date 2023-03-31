import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Component/Header/Header";
import Cards from "./Component/cards/Cards";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <hr className="test" />
      <div className="main-container">
        <div>
          <Cards></Cards>
        </div>
        <div>hellow</div>
      </div>
    </div>
  );
}

export default App;
