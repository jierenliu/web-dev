import React from "react";


const followItem = ({
    wh = {
        avatarIcon: "../images/nasa.png",
        userName: 'NASA',
        handle: 'NASA',
    }}) => {
    return(
        <>
            <div className="list-group-item">
                <div className="row mb-1">
                    <div className="col-2"><img src={wh.avatarIcon} alt='' className="wd-xs-pic"/></div>
                    <div className="col-7"><strong>{wh.userName} </strong><i className="fas fa-circle"/><br/>
                        <span className="wd-right-b-word">@{wh.handle}</span>
                    </div>
                    <button type="button" className="col-2 btn btn-primary wd-default-button">Follow</button>
                </div>
            </div>
        </>
    );
}
export default followItem;