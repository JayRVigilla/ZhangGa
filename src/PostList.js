import React, { useEffect, useState } from 'react';
import './PostList.css';
import PostCard from './PostCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTitlesFromAPI } from './actionCreators';

/** PostList: Component that renders a welcome message and a list of posts
 *    - Holds prop of idToPost
 *    - Used in Routes component
 *    - Uses PostCard component
 */

function PostList() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(function () {
    async function fetchTitles() {
      await dispatch(fetchTitlesFromAPI());
      setIsLoading(false);
    }
    if (isLoading) fetchTitles();
  }, [dispatch, isLoading])

  const titles = useSelector(store => store.titles);
  let postsList = Object.keys(titles).map(k => ({...titles[k], id: k}));

  const postCards = postsList.map(({ title, description, id }) => (
    <PostCard
      key={id}
      id={id}
      title={title}
      description={description} />
  ))


  return (
    <div className="PostList">
      <h3>＿φ(°-°=)</h3>
      <p>Welcome to ZhangGa!</p>
      <div>
        {postCards}
      </div>
    </div>
  );
}

export default PostList;
