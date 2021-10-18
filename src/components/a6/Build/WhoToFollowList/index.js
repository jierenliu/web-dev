import WhoToFollowListItem from "./WhoToFollowListItem";
import who from "./who.json"
const WhoToFollowList = () => {
    return (
            <ul class="list-group">
                <div class="list-group-item"><strong>Who to follow</strong></div>
                {
        who.map(wh => {
            return(<WhoToFollowListItem wh={wh} />);
        })
    }
            </ul>
); }
export default WhoToFollowList
