import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import "./profileCSS.css";
import {Link} from "react-router-dom";
import {changeInfo} from "../../../../services/profileService";
const EditComponent = () => {
    const myInfo  = useSelector((state) => state.myProfile);
    const {firstName, lastName, handle, profilePicture, bannerPicture, website, bio, location, dateOfBirth, dateJoined, followingCount, followersCount, tweetNum} = myInfo;
    let [myBio, setBio] = useState(`${bio}`);
    let [myLocation, setLocation] = useState(`${location}`);
    let [myName, setName] = useState(`${firstName} ${lastName}`);
    let [myWebsite, setWebsite] = useState(`${website}`);
    let dob = dateOfBirth.split("/")
    let [myDateOfBirth, setDateOfBirth] = useState(`${dob[2]}-${dob[0]}-${dob[1]}`);
    const dispatch = useDispatch();
    const saveHandler = () => {
        const names = myName.split(" ");
        const myFirst = names[0];
        const myLast = names.slice(1).join(" ");
        let newDOB = myDateOfBirth.split("-");
        const slashDOB = `${newDOB[1]}/${newDOB[2]}/${newDOB[0]}`;
        changeInfo(dispatch, {
                firstName: myFirst,
                lastName: myLast,
                bio: myBio,
                location: myLocation,
                website: myWebsite,
                dateOfBirth: slashDOB
        } )
    }
    return (
        <>
            <div className="row">
                <div className="col-1 ps-4 pt-2">
                    <Link to="/a8/twitter/profile">
                        <i className="fas fa-times pf-white pf-icon-size"/>
                    </Link>
                </div>
                <div className="col-10 ps-3">
                    <div className="pf-white-large pt-1 pb-3">
                        Edit profile
                        <Link to="/a8/twitter/profile">
                            <button className="pf-save-button" onClick={saveHandler}>Save</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="pf-edit-upper">
                <img src={bannerPicture} className="pf-banner"/>
                <label for="upload" className="fas fa-camera pf-banner-change"/>
                <i className="fas fa-times pf-banner-close"></i>
                <input id="upload" className="pf-banner-change" type="file"/>
                <input id="avatar-pic" className="pf-banner-change" type="file"/>
            </div>
            <img src={profilePicture} className="pf-avatar ms-2"/>
            <label for="avatar-pic" className="fas fa-camera pf-avatar-change"/>

            <div style={{clear: 'both'}}/>

            <div className="pf-edit-area">
                <div className="pf-grey-small">Name</div>
                <input type="text" className="pf-input-area" value={myName} onChange={(event) => setName(event.target.value)}/>
            </div>
            <br/>
            <div className="pf-edit-area">
                <div className="pf-grey-small">Bio</div>
                <textarea type="text" className="pf-input-area pf-large-area" value={myBio} onChange={(event) => setBio(event.target.value)}/>
            </div>
            <br/>
            <div className="pf-edit-area">
                <div className="pf-grey-small">Location</div>
                <input type="text" className="pf-input-area" value={myLocation} onChange={(event) => setLocation(event.target.value)}/>
            </div>
            <br/>
            <div className="pf-edit-area">
                <div className="pf-grey-small">Website</div>
                <input type="text" className="pf-input-area"  placeholder="Type Your Website" value={myWebsite} onChange={(event) => setWebsite(event.target.value)}/>
            </div>
            <br/>
            <div className="pf-edit-area">
                <div className="pf-grey-small">Birth date</div>
                <input type="date" className="pf-dateArea" value={myDateOfBirth} defaultValue={myDateOfBirth} onChange={(event) => {
                    const newDay = event.target.value.split("-")
                    return (setDateOfBirth(`${newDay[0]}-${newDay[1]}-${newDay[2]}`))}}/>
            </div>
            <br/>

        </>
    )
}
export default EditComponent;