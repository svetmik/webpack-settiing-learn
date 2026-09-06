
import "./postStyle.css";

export type Todo = {
  id: number,
  title: string,
  content: string,
  delPost: number,
  decrement: (id: number) => void
}


const Post = ({ id, title, content, delPost, decrement }: Todo) => {

  return (
    <div className="post">
      <div className="post__forma">
        <span className="post__title">{id}. {title}</span><br></br>
        <span className="post__content">{content}</span>
      </div>
      <div>
        <button onClick={() => decrement(delPost)}>удалить</button>
      </div>
    </div>
  )

}

export default Post;