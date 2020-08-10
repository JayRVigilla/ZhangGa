import React from 'react';
import './PostCard.css';
import { Link } from "react-router-dom";
import { ListGroupItem } from "reactstrap";

/** PostCard: Presentational component that renders a single post card
 *  (a title and description for a single post)
 *      - Holds props of id, title, description
 *      - Used in PostList component
 */

function PostCard({ id, title, description }) {
// TODO: create login feature -> attribute author & give 100 character preview.
  return (
    <ListGroupItem>
      <div className="PostCard" id={id}>
        <h5><Link to={`/${id}`}>{title}</Link></h5>
        <p><i>{description}</i></p>
      </div>
    </ListGroupItem>
  );
}

export default PostCard;
