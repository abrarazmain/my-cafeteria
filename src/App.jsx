import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Component/Header/Header";
import Cards from "./Component/cards/Cards";
import Bookmark from "./Component/bookmark/Bookmark";

function App() {
  const [readTime, setReadTime] = useState(0)
  
  const handleReadTime = (time) => {
    const previousReadTime = JSON.parse(localStorage.getItem('readTime'))
    if (previousReadTime) {
      const sum = previousReadTime + parseInt(time)
      localStorage.setItem('readTime',sum)
    }
    else {
      localStorage.setItem('readTime',parseInt(time))
    }
  }

  
  return (
    <div className="App">
      <Header></Header>
      <hr className="test" />
      <div className="main-container">
        <div>
          <Cards setReadTime={setReadTime} handleReadTime={handleReadTime}></Cards>
        </div>
        <div><Bookmark readTime={readTime}></Bookmark></div>
      </div>
    </div>
  );
}

export default App;
