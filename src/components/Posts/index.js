import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

import Post from 'src/components/Post';
import usePageTitle from 'src/hooks/usePageTitle';

const Posts = ({ posts, category }) => {
  usePageTitle(category);
  return (
    <div className="posts">
      <h1 className="posts-title">Dev of Thrones - {category}</h1>
      <div className="posts-list">
        { posts.map((post) => (
          <Post
            key={post.id}
            {...post}
          />
        ))
        }
      </div>
    </div>
  );
};

Posts.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
  category: PropTypes.string.isRequired,
};

export default Posts;
