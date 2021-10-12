import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"
const WhoToFollowList = () => {
    return (`
            <ul class="list-group">
            <!-- continue here -->
            
                <div class="list-group-item"><strong>Who to follow</strong></div>
                ${
        who.map(wh => {
            return(WhoToFollowListItem(wh));
        }).join('')
    }
                
            </ul>
`); }
export default WhoToFollowList
