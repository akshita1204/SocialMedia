import { createContext, useReducer } from "react"

// const DEFAULT_POST_LIST=[{
//     id:"1",
//     title:"Go to delhi",
//     body:"Hi friends i am going to delhi on this monday",
//     reactions:2,
//     userId:"user10",
//     tags:['vacation','delhi'],
// },
// {
//     id:"2",
//     title:"Go to agra",
//     body:"Hi friends i am going to agra on this monday",
//     reactions:15,
//     userId:"user10",
//     tags:['sweets','tajmahal'],
// },
// ];

export const PostList=createContext({
    postList:[],//list of post 
    addPost:()=>{},//to add the post
    addInitialPosts:()=>{},
    deletePost:()=>{},//to delete the post
});

const postListReducer=(curPostList,action)=>
{
  let newPostList=curPostList
  if(action.type==='DELETE_POST')
  {
    newPostList=curPostList.filter(post=> post.id !== action.payload.postId);
  }
  else if(action.type==='ADD_POST')
  {
    newPostList=[action.payload, ...curPostList]
  }
  else if(action.type==='ADD_INITIAL_POSTS')
    {
      newPostList=action.payload.posts || [];
    }
    return newPostList ;
}


const PostListProvider=({children})=>
{
  const [postList,dispatchPostList]=useReducer(postListReducer,[]/*DEFAULT_POST_LIST*/);

  //function for addition of post 
  const addPost=(post)=>
  {
     dispatchPostList(
      {
        type:'ADD_POST',
        payload:post
      }
     )
  }

  const addInitialPosts=(posts)=>
    {
      //console.log("Posts being added:", posts); 
      //console.log("Adding posts:", posts);
       dispatchPostList(
        {
          type:'ADD_INITIAL_POSTS',
          payload:posts
        }
       )
    }

  //function for deletion of post 
  const deletePost=(postId)=>
  {
      //console.log(`delete for ${postId}`)
      dispatchPostList({
        type:'DELETE_POST',
        payload:posts
      })

  }


  return (
    <PostList.Provider value={ {postList,addPost,addInitialPosts,deletePost}}>  
  {children}
  </PostList.Provider>
  );

}



export default PostListProvider;
