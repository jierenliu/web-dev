import React from "react";
import {useSelector} from "react-redux";
import "./profileCSS.css";
import {Link} from "react-router-dom";
const ProfileComponent = () => {
    const myInfo  = useSelector((state) => state.myProfile);
    const {firstName, lastName, handle, profilePicture, bannerPicture, website, bio, location, dateOfBirth, dateJoined, followingCount, followersCount, tweetNum} = myInfo;
    const ym = dateJoined.split("/");
    const months = {  
        '1': 'January',
        '2': 'February',
        '3': 'March',
        '4': 'April',
        '5': 'May',
        '6': 'June',
        '7': 'July',
        '8': 'August',
        '9': 'September',
        '10': 'October',
        '11': 'November',
        '12': 'December',}
    return(
        <>
            <div className="row">

                <div className="col-1 ps-4 pt-2">
                    <Link to="/a7/twitter/home">
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
                <Link to="/a7/twitter/profileEdit">
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
                        <i className="far fa-circle"/> Born {new Date(dateOfBirth).toLocaleString('default', {month: 'long', day: 'numeric' , year: 'numeric'})}
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