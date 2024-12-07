import { useContext,useRef } from "react";
import { PostList } from "../store/post-list-store";
const CreatePost=()=>
{
  const {addPost}=useContext(PostList);

const userIdEle=useRef();
const postTitleEle=useRef();
const postBodyEle=useRef();
const reactionsEle=useRef();
const tagsEle=useRef();

const HandleSubmit=(event)=>
{
  event.preventDefault();
  const userId=userIdEle.current.value;
  const postTitle=postTitleEle.current.value;
  const postBody=postBodyEle.current.value;
  const reactions=reactionsEle.current.value;
  const tags=tagsEle.current.value.split(" ");

  // userIdEle.current.value="";
  // postTitleEle.current.value="";
  // postBodyEle.current.value="";
  // reactionsEle.current.value="";

  fetch('https://dummyjson.com/posts/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      title:postTitle,
      body:postBody,
      reactions:reactions,
      userId:userId,
      tags:tags,
    })
  })
  .then(res => res.json())
  .then(resobj=>addPost(resobj));

  //addPost();
}


 return (
    <form className="createpost" onSubmit={HandleSubmit}>
      <div className="mb-3">
    <label htmlFor="userid" className="form-label">UserId</label>
    <input type="text" ref={userIdEle} className="form-control" id="heading" placeholder="Enter your UserId"/>
  </div>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Post Title</label>
    <input type="text" ref={postTitleEle} className="form-control" id="heading" placeholder="How are you feeling today?"/>
  </div>
  <div className="mb-3">
    <label htmlFor="body" className="form-label">Post Content</label>
    <textarea type="text" ref={postBodyEle} rows="4" className="form-control" id="heading" placeholder="Tell us more about you."/>
  </div>
  <div className="mb-3">
    <label htmlFor="reactions" className="form-label">Reactions</label>
    <input type="text" ref={reactionsEle} className="form-control" id="heading" placeholder="Reactions on your post"/>
  </div>
  <div className="mb-3">
    <label htmlFor="tags" className="form-label">Tags</label>
    <input type="text" ref={tagsEle} className="form-control" id="heading" placeholder="Enter you HashTags"/>
  </div>

  <button type="submit" className="btn btn-primary">Submit</button>
</form>
 );

}
export default CreatePost;