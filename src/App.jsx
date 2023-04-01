import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Component/Header/Header";
import Cards from "./Component/cards/Cards";
import Bookmark from "./Component/bookmark/Bookmark";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [readTime, setReadTime] = useState(0);
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
    const previousTitle = JSON.parse(localStorage.getItem("titles"));
    let blogTitle = [];
    if (previousTitle) {
      const isThisExist = previousTitle.find((t) => t == title);
      if (isThisExist) {
        toast("AlREADY EXIST !!", {
          position: toast.POSITION.TOP_CENTER,
        });
      } else {
        blogTitle.push(...previousTitle, title);
        localStorage.setItem("titles", JSON.stringify(blogTitle));
      }
    } else {
      blogTitle.push(title);
      localStorage.setItem("titles", JSON.stringify(blogTitle));
    }
    window.location.reload()
  };


  return (
    <div className="App">
      <Header></Header>
      <hr className="test" />

      <div className="main-container ">
        <div>
          <Cards
            setReadTime={setReadTime}
            handleReadTime={handleReadTime}
            handleTitle={handleTitle}
          ></Cards>
        </div>
        <div>
          <Bookmark readTime={readTime}></Bookmark>
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
      ></ToastContainer>
    </div>
  );
}

export default App;
