import PostSummaryItem from "./PostSummaryItem";
import posts from "./posts.json"
const PostSummaryList  = ({title}) => {
    return (
        <>

            <ul className="list-group">
                <span className="wd-happening list-group-item wd-main-info ">{title}</span>
                {
                    posts.map(post => {
                        return (<PostSummaryItem post={post}/>);
                    })
                }
            </ul>
        </>

);
}
export default PostSummaryList
