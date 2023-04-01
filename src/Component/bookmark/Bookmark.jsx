import React from "react";
import BookmarkBlog from "../bookmarkBlog/BookmarkBlog";
import "./Bookmark.css";

const Bookmark = ({ readTime }) => {
  const resetTime = () => {
    localStorage.removeItem("readTime");
    window.location.reload();
  };
  const sum = localStorage.getItem("readTime");


  const titles = localStorage.getItem("titles")


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
        <h1 className="bookmark-count">Bookmarked Blogs:</h1>

        {
         titles ||  titles.map(title => <BookmarkBlog title = {title}></BookmarkBlog>)
        }
        
      </div>
    </div>
  );
};

export default Bookmark;
