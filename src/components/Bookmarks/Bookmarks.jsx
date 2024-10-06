import PropTypes from 'prop-types'; // ES6
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="md:w-1/3 bg-gray-300 pt-4">
            <div className="">
                <h3 className='text-3xl text-center'>Reading Time: {readingTime}</h3>
            </div>

            <h2 className='text-3xl mb-5 text-center'>Bookmarks: {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark, idx) => (
                    <Bookmark 
                    key={idx} 
                    bookmark={bookmark}
                    ></Bookmark>
                ))
            }            
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    readingTime: PropTypes.number.isRequired,
};

export default Bookmarks;