import PostItem from "../PostList/PostItem.js";
import posts from "../PostList/posts.js";
const HomeComponent = () => {
    return(`
            ${posts.map(post => {
                return(PostItem(post));
    }).join('')
    }
           
    `);
}
export default HomeComponent
