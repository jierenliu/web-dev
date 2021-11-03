import React from "react";
import PostItem from "../PostList/PostItem";
import {useSelector} from "react-redux";
import WhatsHappening from "../WhatsHappening";
const HomeComponent = () => {
    const selectAllTweets = (state) => state.tweets;
    const tweets = useSelector(selectAllTweets);
    return(
        <>
            <div className="list-group">
                <WhatsHappening/>
                {tweets.map(post => {
                    return(<PostItem post={post}/>);
                })
                }
            </div>

        </>
    );
}
export default HomeComponent
