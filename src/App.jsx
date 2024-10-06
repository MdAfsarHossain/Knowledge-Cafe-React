import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmarks = (blog) => {
    setBookmarks([...bookmarks, blog]);
  }

  const handleMarkAsRead = (id, time) => {
    setReadingTime(readingTime + time);

    // remove reading bookmarks
    setBookmarks(bookmarks.filter(bookmark => bookmark.id!== id));
  }

  return (
    <div className='max-w-6xl mx-auto'>
      <Header></Header>
      <div className="md:flex">
        <Blogs handleAddToBookmarks={handleAddToBookmarks}
        handleMarkAsRead={handleMarkAsRead}></Blogs>
        <Bookmarks 
        bookmarks={bookmarks} 
        readingTime={readingTime}></Bookmarks>
      </div>
    </div>
  )
}

export default App;
