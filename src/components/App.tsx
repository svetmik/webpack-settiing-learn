import React, { useEffect, useState } from "react"
import { supabase } from "../utils/supabase";
import PostList from "./PostList";
import { InputPost } from "./InputPost";
import { Form } from "./Form";
import { DEBUG } from "../config";
import "../style.css";
import "../vendor.css"
import { error } from "node:console";
const App = () => {

  type TodoNewObj = {
    targetValue: string,
    event: React.ChangeEvent<HTMLInputElement>
  }

  const list : any[] = [
    // { id: 1, title: "Java", content: "Описание" },
    // { id: 2, title: "Python", content: "Описание" },
    // { id: 3, title: "C++", content: "Описание" },
    // { id: 4, title: "JavaScript", content: "Описание" },
    // { id: 5, title: "Dart", content: "Описание" },
    // { id: 6, title: "Go", content: "Описание" },
  ]

  const [posts, setPost] = useState(list);
  const [newPost, setNewPost] = useState({ title: '', content: '' });


  useEffect(() => {
    async function getTodos() {
      const { data : posts } = await supabase.from('List').select("*")

      if(posts) {
        setPost(posts)
      }
    }

    getTodos();
  }, [])



  const handleInputEvent = ({ event, targetValue }: TodoNewObj) => {
    setNewPost({ ...newPost, [targetValue]: event.target.value })
  }


  // Добавляем новый пост
  const increment = (event: any) => {

    event.preventDefault();

    const objNewPost = {
      //id: Date.now(),
      title: newPost.title,
      content: newPost.content,
    }

    const insertData = async () =>  {
      const { data, error } = await supabase
      .from('List').insert([{title: objNewPost.title, content: objNewPost.content}]).select('*')
      if(error) {
        console.log(error.message);
        return;
      } else {
        console.log(data[0])
      }

      setPost([...posts, data[0]])
    }

    insertData();

    setNewPost({ title: '', content: '' });

  }

  // Удаляем старый пост
  const decrement = (id: number) => {
    setPost(posts.filter((item) => (item.id !== id)))
  }

  return (
    <div className="container site-container">
      <div className="task__title">
        <h2>Task Management App</h2>
      </div>
      <Form onSubmit={increment}>
        <div className="post-form">
          <div>
            <InputPost
              name="postTitle"
              type="text"
              value={newPost.title}
              onChange={(e) => handleInputEvent({ event: e, targetValue: 'title' })}
              placeholder="Название поста"
              required={true}
            />
            <InputPost
              name="postContent"
              type="text"
              value={newPost.content}
              onChange={(e) => handleInputEvent({ event: e, targetValue: 'content' })}
              placeholder="Описание поста"
              required={true}
            />

          </div>
          <button type="submit">Добавить пост новый</button>
        </div>
        <div className="myPosts">
          
          <PostList posts={posts} removePost={decrement} />
        </div>
      </Form>
    </div>
  )
}

export default App;