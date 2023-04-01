import React from 'react';
import './BookmarkBlog.css'

const BookmarkBlog = ({title}) => {
    return (
        <div className='bookmark-card-container'>
            
            <h2 className='bookmark-card'>{ title}</h2>
        </div>
    );
};

export default BookmarkBlog;