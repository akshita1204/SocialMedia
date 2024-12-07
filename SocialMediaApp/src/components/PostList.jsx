import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import { useContext, useEffect,useState} from "react";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";
const PostList=()=>
{
    const {postList,addInitialPosts}=useContext(PostListData);
    const [fetching,setfetching]=useState(false);
    // useEffect(()=>
    // {
    //   setfetching(true);
    //   fetch("https://dummyjson.com/posts")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data); // Logs full object, including `posts`
    //     addInitialPosts( data.posts); // Pass only `posts` array
    //   })
    // },[])
  
    const handlegetpostclick = () => {
      
    };
    

 return (
  <>
  {fetching && <LoadingSpinner/>}
  {!fetching && postList.length===0 && 
    <WelcomeMessage />}
  {
  !fetching && postList.map((post)=>(
  <Post key={post.id} post={post}/>
  )
  )}
  </>
 );

}
export default PostList;