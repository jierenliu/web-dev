import React from "react";
const PostItem = ({post}) => {
    const {name, username, head, time, message, mainPic, mainTitle, mainMessage, link, comment, retweet, like} = post;

    return (
        <>
            <div className="row border-secondary border-bottom border-start border-end pt-2">
                <div className="col-1"><img src={head} className="wd-xs-pic"/></div>
                <div className="col-11 ps-4">
                    <div className="mb-2">
                        <span className="wd-white-text"><strong>{name} </strong><i className="fas fa-check-circle"/></span>
                        <span className="wd-grey-text"> @{username} · {time}</span><br/>
                        <span dangerouslySetInnerHTML = {{__html: message}} className="wd-white-text"/><br/>
                    </div>
                    {mainTitle
                        ? <ul className="list-group wd-main-cur">
                            <div className="list-group-item border-secondary pt-0 ps-0 pb-0 pe-0">
                                <img src={mainPic} className="wd-center-pic wd-main-topCur"/>
                            </div>
                            <div className="list-group-item border-secondary">
                                <span>{mainTitle}</span><br/>
                                <span className="wd-grey-text">{mainMessage}</span><br/>
                                <span className="wd-grey-text"><i className="fas fa-link"/> {link}</span><br/>
                            </div>
                        </ul>
                        :<ul class="list-group wd-main-cur">
                                <div class="list-group-item border-secondary pt-0 ps-0 pb-0 pe-0">
                                    <img src={mainPic} class="wd-center-pic wd-main-cur"/>
                                </div>
                        </ul>
                    }
                    <div className="row pt-2 pb-2">
                        <span className="col-3 wd-lower-icon"><i className="far fa-comment"/>&nbsp;&nbsp; {comment}</span>
                        <span className="col-3 wd-lower-icon"><i className="fas fa-retweet"/>&nbsp;&nbsp; {retweet}</span>
                        <span className="col-3 wd-lower-icon"><i className="far fa-heart"/>&nbsp;&nbsp; {like}</span>
                        <span className="col-3 wd-lower-icon"><i className="far fa-share-square"/></span>
                    </div>
                </div>
            </div>
        </>
    );
}
export default PostItem