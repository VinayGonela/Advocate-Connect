import React, {  useEffect, useState} from 'react';
import '../css/Feed.css';
import QueryBox from './QueryBox';
import Post from "./Post";
import db from '../firebase';


function Feed() {

    const [posts,setPosts] = useState([])

    useEffect(() => {
        db.collection("questions")
          .orderBy("timestamp", "desc")
          .onSnapshot((snapshot) =>
            setPosts(
              snapshot.docs.map((doc) => ({
                id: doc.id,
                questions: doc.data(),
              }))
            )
          );
      }, []);
return (
        <div className = 'feed'>
            <QueryBox />
            {
                posts.map(({ id, questions})=>(
                    <Post 
                        key = {id}
                        id = {id}
                        question= {questions.question}
                        timestamp= {questions.timestamp}
                        queryUser = {questions.user}
                    />
                
                ))
            }
            
        </div>
    )
}

export default Feed
