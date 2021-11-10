import WhoToFollowListItem from "./WhoToFollowListItem";
import {useSelector} from "react-redux";
const WhoToFollowList = () => {
    const who = useSelector((state) => state.who);
    return (
            <ul class="list-group">
                <div class="list-group-item"><strong>Who to follow</strong></div>
                {
        who.map((wh) => {
            return(<WhoToFollowListItem wh={wh} />);
        })
    }
            </ul>
); }
export default WhoToFollowList
