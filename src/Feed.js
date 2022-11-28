import React,{useEffect, useState} from 'react'
import "./Feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post.js";
import db from "./firebase";
import FlipMove from "react-flip-move";

function Feed() {
  const [posts,setPosts]=useState([])
  
  // run this block of code when the values of the [] changes
  useEffect(()=>{
    // code...
    db.collection('posts').onSnapshot(snapshot => (
      setPosts(snapshot.docs.map(doc =>doc.data()))
    ))
  },[]); 
  
  return (
    <div className="feed">
      {/* Header */}
        <div className="feed__header">
            <h2>Home</h2>
        </div>
   

      {/* Tweet box */}
        <TweetBox/>

      {/* Posts */}

      <FlipMove>
      {posts.map( post => (
        <Post
          key={post.text}
          displayName={post.displayName}
          username={post.username}
          verified={post.verified}
          text={post.text}
          avatar={post.avatar}
          image={post.image}

        />
        ))}
        </FlipMove>
{/*       

      <Post
        displayName="Aditya Singh"
        username="adityaxsingh"
        verified={false}
        text="gais attendance chudd gayi!! leaving planet now"
        image="https://img.freepik.com/premium-photo/astronaut-outer-open-space-planet-earth-stars-provide-background-erforming-space-planet-earth-sunrise-sunset-our-home-iss-elements-this-image-furnished-by-nasa_150455-16829.jpg?w=2000"

        avatar="https://cdn.pixabay.com/photo/2020/04/16/08/34/birthday-number-candles-5049708__340.png"
      />
       */}
      {/* Posts */}

      {/* Posts */}
      {/* Posts */}
      {/* Posts */}
      {/* Posts */}
      {/* Posts */}
      {/* Posts */}
    </div> 
  );
}

export default Feed
