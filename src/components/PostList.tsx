
import Post from "./Post";
import "./postList.css";


const PostList = ({posts, removePost} : any ) => {

    return (
    posts.map((obj : any, index : number) => 
    <Post 
      key={obj.id} 
      id={index + 1} 
      title={obj.title} 
      content={obj.content}
      delPost={obj.id}
      decrement={removePost}
      />
    )
  )
  
}

export default PostList