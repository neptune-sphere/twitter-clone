import React from 'react';
import "./Widgets.css";
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from '@mui/icons-material/Search';

function Widgets() {
  return (
    <div className="widgets">
        <div className="widgets__input">
            <SearchIcon className="widgets__searchIcon"/>
            <input placeHolder="Search Twitter" type="text"/>
        </div>
        <div className="widgets__widgetsContainer">
            <h2>Whats Happening</h2>
            <TwitterTweetEmbed tweetId={"1592397030022082561"}></TwitterTweetEmbed>

            <TwitterTimelineEmbed
              sourceType="profile"
              screenName="elonmusk"
              options={{height:400}}

            />

            {/* <TwitterShareButton
              url={"https://www.instagram.com/hrishikesxh"}
              options={{text:"Follow us on Instagram!!",
              via:"hrishi_wavhal"}}
            /> */}
        </div>
    </div>
  );
}

export default Widgets
