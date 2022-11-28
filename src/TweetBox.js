import React,{useState} from 'react';
import "./TweetBox.css";
import {Avatar,Button} from "@mui/material";
import db from "./firebase";

function TweetBox(){
  const [tweetMessage,setTweetMessage]=useState("");
  const [tweetImage,setTweetImage]=useState("");

  const sendTweet = e => {
    e.preventDefault();

    db.collection('posts').add({
      displayName:'Hrishikesh',
      username:"hrishi",
      verified:true,
      text:tweetMessage,
      image:tweetImage,
      avatar: 
        "https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg"
    });
      setTweetMessage("");
      setTweetImage("");
  };
  
  return (
    <div className="tweetBox">
        <form>
            <div className="tweetBox__input">
                <Avatar src="index.jpg"></Avatar>
                <input 
                onChange={(e)=>setTweetMessage(e.target.value)}
                value={tweetMessage} 
                placeholder="What's happening?"
                type="text"
                />


            </div>
            
            <input
            value={tweetImage}
            onChange={e => setTweetImage(e.target.value)}
                className="tweetBox_imageInput"
                placeholder='Optional : Enter Image'
                type="text"
            />

        <Button onClick={sendTweet}className="tweetBox__tweetButton" type="submit">Tweet</Button>
        </form>
    </div>
  )
}

export default TweetBox
