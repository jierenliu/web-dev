import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import "./whCSS.css";
import {postNewTweet} from "../../../../services/twitterService";
const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening] = useState('');
    const dispatch = useDispatch();
    const myInfo = useSelector((state) => state.myProfile)

    const tweetClickHandler = () => {
        console.log('click the button');
        console.log(whatsHappening);
        postNewTweet(dispatch, {
            tweet: whatsHappening
        });

    }
    return(
        <div className="list-group-item hs-bg">
            <div className="row pt-2">
                <div className="col-1 ps-1"><img src={myInfo.profilePicture} className="wd-xs-pic"/></div>
                <div className="col-11 ps-4">
                    <textarea value={whatsHappening}
                              className="hs-newTweet"
                              onChange={(event) => setWhatsHappening(event.target.value)}
                              placeholder="What's happening?">
                    </textarea>
                    <br/>
                    <i className="far fa-image hs-icon"/>
                    <i className="far fa-chart-bar hs-icon"/>
                    <i className="far fa-smile hs-icon"/>
                    <i className="far fa-calendar hs-icon"/>
                    <button className="hs-tweet-button btn btn-primary btn-block rounded-pill" onClick={tweetClickHandler}>
                        Tweet
                    </button>
                </div>
            </div>

        </div>
    );}
export default WhatsHappening;
