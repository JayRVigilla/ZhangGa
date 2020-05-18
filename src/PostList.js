import React, { useState, useEffect } from 'react';
import './PostList.css';
import PostCard from './PostCard';
import { useDispatch } from 'react-redux';
import { fetchTitlesFromAPI } from './actionCreators';


/** PostList: Component that renders a welcome message and a list of posts
 *    - Holds prop of idToPost
 *    - Used in Routes component
 *    - Uses PostCard component
 */

function PostList() {
  // const titleList = useSelector(st => st.titles, shallowEqual);
  // const [isLoading, setIsLoading] = useState(true);
  const [idToPost, setIdToPost] = useState("Loading");
  const dispatch = useDispatch();


  // Work in Progress...

  /**function TitleList() {
    const titles = useSelector(st => st.titles);
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true);
    useEffect(function() {
      async function fetchTitle() {
        await dispatch(fetchTitlesFromAPI());
        setIsLoading(false);
      }
      if (isLoading) {
        fetchTitle();
      }
    }, [dispatch, isLoading]); */

  useEffect(function () {
    async function getTitles() {
      dispatch(fetchTitlesFromAPI());
    }
    setIdToPost(getTitles());
  }, [dispatch])

  //useSelector for idToPost
  let postsList = Object.keys(idToPost).map(id => idToPost[id]);

  const postCards = postsList.map(({ title, description, postId }) => (
      <PostCard
        key={postId}
        postId={postId}
        title={title}
        description={description}></PostCard>

  ))


  return (
    <div className="PostList">
      <h3>＿φ(°-°=)</h3>
      <p>Welcome to Microblog!</p>
      <div>
          {postCards}
      </div>
    </div>
  );
}

export default PostList;
