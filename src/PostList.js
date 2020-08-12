import React from 'react';
import './PostList.css';
import PostCard from './PostCard';

/** PostList: Component that renders a welcome message and a list of posts
 *    - Holds prop of idToPost
 *    - Used in Routes component
 *    - Uses PostCard component
 */

function PostList({ idToPost }) {

  let postsList = Object.keys(idToPost).map(id => idToPost[id]);

  const postCards = postsList.map(({ title, description, key }) => (
    <PostCard
      key={key}
      id={key}
      title={title}
      description={description}></PostCard>
  ))



  return (
    <div className="PostList">
      <div>
        {postCards}
      </div>
    </div>
  );
}

export default PostList;
