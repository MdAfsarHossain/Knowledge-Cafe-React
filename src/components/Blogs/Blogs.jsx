import PropTypes from 'prop-types'; // ES6
import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({handleAddToBookmarks, handleMarkAsRead}) => {
    const [blogs, setBlogs] = useState([]);

    // Fetch data from API
    useEffect(() => {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])


    return (
        <div className="md:w-2/3 mr-10">
            <h1 className='text-3xl mb-5'>Blogs: {blogs.length}</h1>

            {
                blogs.map(blog => 
                <Blog 
                key={blog.id} 
                blog={blog} 
                handleAddToBookmarks={handleAddToBookmarks}
                handleMarkAsRead={handleMarkAsRead}
                ></Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    handleAddToBookmarks: PropTypes.func.isRequired, // ES6
    handleMarkAsRead: PropTypes.func.isRequired // ES6
}

export default Blogs;