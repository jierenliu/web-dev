import React, {useEffect} from "react";
import PostItem from "../PostList/PostItem";
import {useDispatch, useSelector} from "react-redux";
import WhatsHappening from "../WhatsHappening";
import {fetchAllTweets} from "../../../../services/twitterService";
const HomeComponent = () => {
    const selectAllTweets = (state) => state.tweets;
    const tweets = useSelector(selectAllTweets);
    const dispatch = useDispatch();
    useEffect(() => fetchAllTweets(dispatch), [])
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
