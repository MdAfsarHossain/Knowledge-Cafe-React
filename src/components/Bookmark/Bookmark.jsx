import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    const {title} = bookmark;

    return (
        <div className='bg-slate-200 p-4 m-4 rounded-xl'>
            <h1>{title}</h1>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object.isRequired,
};

export default Bookmark;