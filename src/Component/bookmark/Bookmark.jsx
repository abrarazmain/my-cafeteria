import React, { useEffect, useState } from "react";
import BookmarkBlog from "../bookmarkBlog/BookmarkBlog";
import "./Bookmark.css";

const Bookmark = ({ readTime }) => {
  const resetTime = () => {
    localStorage.removeItem("readTime");
    localStorage.removeItem('titles')
    window.location.reload();
  };
  const sum = localStorage.getItem("readTime");
  const title = localStorage.getItem("titles");

  const [titles, setTitles] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("titles")) || [];
    setTitles(data);
  }, []);

  useEffect(() => {
    if (titles.length > 0) {
      localStorage.setItem("myData", JSON.stringify(titles));
    } else {
      localStorage.removeItem("myData");
    }
  }, [titles]);


  const titleLength = localStorage.getItem('titles')
    const newTitleLength = JSON.parse(titleLength)
    console.log();

  return (
    <div className="bookmark-container">
      <div className="reading-time-container">
        <h2>
          Spent Time On Read: {sum || 0}
          {" min"}
          <button onClick={resetTime} className="reset">
            reset
          </button>
        </h2>
      </div>
      <div className="bookmark-title-container">
        <h1 className="bookmark-count">Bookmarked Blogs:{newTitleLength? newTitleLength.length : 0}</h1>
        {titles.length > 0 &&
        titles.map((title) => (
          <BookmarkBlog key={title} title={title}></BookmarkBlog> 
        ))}
        
      </div>
      
    </div>
  );
};

export default Bookmark;
