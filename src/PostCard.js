import React from 'react';
import './PostCard.css';
import { Link } from "react-router-dom";

/** PostCard: Presentational component that renders a single post card 
 *  (a title and description for a single post) 
 *      - Holds props of id, title, description
 *      - Used in PostList component
 */

function PostCard({ postId, title, description }) {

  return (
    <div className="PostCard" id={postId}>
      <h5><Link to={`/${postId}`}>{title}</Link></h5>
      <p><i>{description}</i></p>
    </div>
  );
}

export default PostCard;
