import React from "react";
const PostSummaryItem = ({
        post = {
            topic: "Web Development",
            userName: "ReactJS",
            time: "2h",
            title: "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
            image: "../images/react.jpeg",
        }}
) => {
    return (
        <>
            <div className="list-group-item wd-main-info ">
                <div className="row">
                    <div className="col-9">
                        {(post.topic)?<><span className="text-muted">{post.topic}</span><br/></>:null}
                        {(post.userName)?<><span className="wd-white-text"><strong>{post.userName} </strong></span></>:null}
                        {(post.time)?<><i className="fas fa-circle wd-white-text"/><span className="text-muted"> - {post.time}</span></>:null}
                        <br/>
                        {(post.title)?<><span className="wd-white-text"><strong>{post.title}</strong></span><br/></>:null}
                    </div>
                    <div className="col-3 d-flex justify-content-center align-self-center">
                       <img src={post.image} className="wd-small-pic"/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default PostSummaryItem

