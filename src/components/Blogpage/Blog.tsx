import { useState, useEffect } from "react";
import Post from './Post';
import api from '../../api/api';
import SkeltonLoader from "./SkeltonLoader";

interface IPost {
  Title: string;
  Date: string;
  Description: any;
  Image: string 
}

const Blog = () => {
  const [postData, setPosts] = useState<IPost[]>([]);
  const [loading, setLoading] = useState(false);

  const getPosts = async () => {
      try {
        let response = await api.get('/api/blog/posts'); 
        let data = response.data;
        
        if( data.items && data.items.length > 0 ){
            let newPosts: IPost[] = data.items.map((e: IPost) => e);
            setPosts(newPosts); 
        }

        setLoading(false);
      } catch(error) {
        console.log(error);
        setLoading(false);
      }
  }

  useEffect(() => {
    setLoading(true);
    getPosts();   
  },[]);

  return(
      <div className="flex flex-col items-center h-screen bg-cover bg-gradient-to-b from-black to-purple-500 ">
        { loading ?
        <div className="flex flex-col w-3/4 h-full p-5">
              <SkeltonLoader/>
              <SkeltonLoader/>
              <SkeltonLoader/>
          </div> :  
          postData && postData.length > 0 ?
          postData.map((post: IPost, key: number) => 
          <Post
              key={key}
              Title={post.Title} 
              Description={post.Description}
              Image={post.Image}
              Date={post.Date}/>)
          : <h1 className="m-5 text-5xl text-white">There are no posts currently.</h1>   
        }
      </div>
  );
}

export default Blog;
