import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Component/Header/Header";
import Cards from "./Component/cards/Cards";
import Bookmark from "./Component/bookmark/Bookmark";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Qna from "./Component/qna/Qna";


function App() {
  const [readTime, setReadTime] = useState(0);
  const [Titles, setTitles] = useState([]);

  useEffect(() => {
    const previousTitles = JSON.parse(localStorage.getItem("titles"));
    if (previousTitles) {
      setTitles(previousTitles);
    }
  }, []);

  const handleReadTime = (time) => {
    const previousReadTime = JSON.parse(localStorage.getItem("readTime"));
    if (previousReadTime) {
      const sum = previousReadTime + parseInt(time);
      localStorage.setItem("readTime", sum);
    } else {
      localStorage.setItem("readTime", parseInt(time));
    }
  };

  const handleTitle = (title) => {
    const previousTitles = JSON.parse(localStorage.getItem("titles"));
    if (previousTitles) {
      const isThisExist = previousTitles.find((t) => t === title);
      if (isThisExist) {
        toast("ALREADY EXIST !!", {
          position: toast.POSITION.TOP_CENTER,
        });
      } else {
        const updatedTitles = [...previousTitles, title];
        localStorage.setItem("titles", JSON.stringify(updatedTitles));
        setTitles(updatedTitles);
      }
    } else {
      const updatedTitles = [title];
      localStorage.setItem("titles", JSON.stringify(updatedTitles));
      setTitles(updatedTitles);
    }
  };

  return (
    <div className="App">
      <Header />
      <hr className="test" />

      <div className="main-container">
        <div>
          <Cards
            setReadTime={setReadTime}
            handleReadTime={handleReadTime}
            handleTitle={handleTitle}
          />
        </div>
        <div>
          <Bookmark readTime={readTime} Titles={Titles} />
        </div>
      </div>
   
      <ToastContainer
        position="top-center"
        autoClose={2001}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Qna></Qna>
    </div>
  );
}

export default App;
