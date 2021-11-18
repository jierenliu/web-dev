import WhoToFollowListItem from "./WhoToFollowListItem";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchWhoToFollow} from "../../../../services/whoService";
const WhoToFollowList = () => {
    const who = useSelector((state) => state.who);
    const dispatch = useDispatch();
    useEffect(() => fetchWhoToFollow(dispatch), []);
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
