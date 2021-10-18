import React from "react";
import PostItem from "../PostList/PostItem";
import posts from "../PostList/posts.json";
const HomeComponent = () => {
    return(
        <>
            {posts.map(post => {
                return(<PostItem post={post}/>);
            })
            }
        </>
    );
}
export default HomeComponent
