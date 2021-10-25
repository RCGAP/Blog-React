import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import DOMPurify from 'dompurify';

import './styles.scss';

const createMarkup = (dirtyHTML) => {
  const cleanHTML = DOMPurify.sanitize(dirtyHTML, {
    ALLOWED_TAGS: ['em', 'strong'],
  });
  return {
    __html: cleanHTML,
  };
};

const Post = ({ category, title, excerpt }) => (
  <div className="post">
    <h2 className="post-title">{title}</h2>
    <Link to={category.toLowerCase()}><div className="post-category">{category}</div></Link>
    <p
      className="post-excerpt" 
      dangerouslySetInnerHTML={createMarkup(excerpt)} 
    />
  </div>
);

Post.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
};

export default Post;
