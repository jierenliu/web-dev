import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import "./profileCSS.css";
import {Link} from "react-router-dom";
import {fetchInfo} from "../../../../services/profileService";
const ProfileComponent = () => {
    const myInfo  = useSelector((state) => state.myProfile);
    const {firstName, lastName, handle, profilePicture, bannerPicture, website, bio, location, dateOfBirth, dateJoined, followingCount, followersCount, tweetNum} = myInfo;
    const dispatch = useDispatch();
    useEffect(() => fetchInfo(dispatch), [])
    const ym = dateJoined.split("/");
    let dob = dateOfBirth.split("/")
    const months = {  
        '01': 'January',
        '02': 'February',
        '03': 'March',
        '04': 'April',
        '05': 'May',
        '06': 'June',
        '07': 'July',
        '08': 'August',
        '09': 'September',
        '10': 'October',
        '11': 'November',
        '12': 'December',}
    return(
        <>
            <div className="row">

                <div className="col-1 ps-4 pt-2">
                    <Link to="/a8/twitter/home">
                        <i className="fas fa-arrow-left pf-white pf-icon-size"/>
                    </Link>
                </div>
                <div className="col-10 ps-3">
                    <div className="pf-white-large">
                        {firstName} {lastName}
                    </div>
                    <div className="pf-grey-small pf-tweet-closer">
                        {tweetNum} Tweets
                    </div>


                </div>
            </div>
            <div className="pf-upper">
                <img src={bannerPicture} className="pf-banner"/>
                <Link to="/a8/twitter/profileEdit">
                    <button className="pf-edit-button ps-2 pe-2 pt-1 pb-1">Edit profile</button>
                </Link>
            </div>
            <img src={profilePicture} className="pf-avatar ms-2"/>
            <div style={{clear: 'both'}}/>
            <div className="ms-2">
                <div className="pf-white-large">
                    {firstName} {lastName}
                </div>
                <div>
                    <div className="pf-grey-small pf-tweet-closer">
                        @{handle}
                    </div>
                    <p className="pf-white">
                        {bio}
                    </p>
                    <p className="pf-grey-middle">
                        <i className="fas fa-map-marker-alt"/> {location}&nbsp;&nbsp;&nbsp;&nbsp;
                        <i className="far fa-circle"/> Born {months[dob[0]]} {dob[1]}, {dob[2]}
                        &nbsp;&nbsp;&nbsp;&nbsp;<i className="far fa-calendar-alt"/> Joined {months[ym[0]]}, {ym[1]}
                    </p>
                    <p className="pf-grey-middle">
                        <span className="pf-white-bold">{followingCount}</span> Following&nbsp;&nbsp;&nbsp;
                        <span className="pf-white-bold">{followersCount}</span> Followers
                    </p>
                </div>
            </div>
        </>
    );
}
export default ProfileComponent;