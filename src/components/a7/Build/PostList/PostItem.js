import React from "react";
import {useDispatch} from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
const PostItem = ({post}) => {
    const dispatch = useDispatch();
    const likeClickHandler = () => {
        dispatch({type: 'like-tweet', post});
    };

    const deleteTweetClickHandler = () => {
        dispatch({type: 'delete-tweet', post})
    };


    const {_id, topic, userName, verified, handle, time, title, tweet, attachments, logo, avatar, stats} = post;
    const avatarImage = post["avatar-image"];
    return (
        <div className="list-group-item ">
            <div className=" row pt-2">
                <div className="col-1 ps-1"><img src={avatarImage} className="wd-xs-pic"/></div>
                <div className="col-11 ps-4">
                    <div className="mb-2">
                        <span className="wd-white-text">
                            <strong>{userName} </strong>
                            {verified && <i className="fas fa-check-circle"/>}
                        </span>
                        <span className="wd-grey-text"> @{handle} · {time}</span>
                        <FontAwesomeIcon className="wd-delete" onClick={deleteTweetClickHandler} icon={faTimes} />
                        <br/>
                    </div>
                    <div>
                        {tweet}
                    </div>
                    {
                        post.attachments && post.attachments.image &&
                        <img src={post.attachments.image}
                             className="mt-2 wd-border-radius-20px"
                             style={{width: "100%"}}/>
                    }
                    {
                        post.attachments && post.attachments.video &&
                        <iframe width="100%" height="350px"
                                className="mt-2 wd-border-radius-20px"
                                style={{width: "100%"}}
                                src={`https://www.youtube.com/embed/${post.attachments.video}`}
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen></iframe>
                    }
                    <div className="row pt-2 pb-2">
                        <span className="col-3 wd-lower-icon"><i className="far fa-comment"/>&nbsp;&nbsp; {post["stats"]["comments"]}</span>
                        <span className="col-3 wd-lower-icon"><i className="fas fa-retweet"/>&nbsp;&nbsp; {stats["retweets"]}</span>
                        <span className="col-3 wd-lower-icon" onClick={likeClickHandler} >
                            {post.liked && <i className="fas fa-heart me-2" style={{color: post.liked ? "red" : "white"}}/>}
                            {!post.liked && <i className="far fa-heart me-2"/>}
                            &nbsp;&nbsp; {stats.likes}</span>
                        <span className="col-3 wd-lower-icon"><i className="far fa-share-square"/></span>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default PostItem